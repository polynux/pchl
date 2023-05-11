import Layout from "@/layouts/Home"
import { api } from "@/utils/api";

export default function Test() {
    const json = api.example.pbPages.useQuery();

  return (
    <Layout>
      {json.data?.map((page) => (
        <div key={page?.id}>
          <p>{page?.id}</p>
          <h1>{page?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page?.field }} />
        </div>
      ))}
    </Layout>
  )
}
