import Layout from "@/layouts/Home"
import type { PagesRecord } from "@/@types/pocketbase-types"

export default function Test({ json }: { json: PagesRecord[]}) {
  console.log(json)

  return (
    <Layout>
      {json.map((page: PagesRecord) => (
        <div key={page.slug}>
          <p>{page.slug}</p>
          <h1>{page.title}</h1>
        </div>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const { getPages } = await import("@/utils/pb")

  const {data, error} = await getPages();
  if (error || !data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      json: JSON.parse(JSON.stringify(data)),
    },
  }
}
