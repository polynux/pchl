import type { PagesRecord } from '@/@types/pocketbase-types';
import Layout from '@/layouts/Home'
import { getPageBySlug } from '@/utils/pb'

export default function Page({data}: {slug: string, data: PagesRecord}) {
  return (
    <Layout title={data.title}>
      <h1>{data.title}</h1>
      <pre>{JSON.stringify(data.content, null, 2)}</pre>
    </Layout>
  )
}

export async function getServerSideProps({params}: {params: {slug: string}}) {
  const {data, error} = await getPageBySlug(params.slug);
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
