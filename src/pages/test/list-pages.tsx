import type { PagesRecord } from "@/@types/pocketbase-types";
import { getPages } from "@/utils/pb";
import Layout from "@/layouts/Home";

export default function ListPages({ data }: { data: PagesRecord[] }) {
  return (
    <Layout title="List Pages">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl my-2">List Pages</h1>
        <div>
          {data.map((page: PagesRecord) => (
            <div key={page.slug} className="border-b-2">
              <h2>{page.title}</h2>
              <p>Content (in JSON): </p>
              <pre>{JSON.stringify(page.content, null, 2)}</pre>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const { data, error } = await getPages();
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
