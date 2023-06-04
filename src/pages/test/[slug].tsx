import type { PagesRecord } from '@/@types/pocketbase-types';
import Layout from '@/layouts/Home'
import EditorRender from '@/components/EditorRender';
import type { Content } from '@/components/EditorRender';

export default function Page({ data }: { data: PagesRecord<Content> }) {
  return (
    <Layout title={data.title}>
      <div className="container mx-auto p-8">
        <p>Here is the content rendered:</p>
        <EditorRender data={data} />
      </div>
      <pre>{JSON.stringify(data.content, null, 2)}</pre>
    </Layout>
  )
}

export async function getServerSideProps({ params }: { params: { slug: string } }) {
  const { getPageBySlug } = await import("@/utils/pb");
  const { data, error } = await getPageBySlug(params.slug);
  if (error || !data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data,
    },
  }
}
