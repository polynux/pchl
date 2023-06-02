import dynamic from 'next/dynamic'
import Layout from '@/layouts/Home'
import { useState } from 'react'
import { OutputData } from "@editorjs/editorjs";
import { getPageBySlug } from '@/utils/pb';
import { api } from '@/utils/api';

const ReactEditorJS = dynamic(() => import('@/components/ReactEditor'), {
  ssr: false
})

export default function Editor({data: pbData}: {data: OutputData}) {
  const [data, setData] = useState<OutputData>(pbData);
  const {mutate, isLoading, data: data2, isError} = api.pages.updatePage.useMutation();

  if (data2) console.log(data2)

  const handleSubmit = () => {
    if (!data) return
    mutate({
      slug: 'test',
      title: 'Test',
      content: data
    })
  }

  return (
    <Layout title='EditorJS'>
      <button onClick={handleSubmit}>Save</button>
      {isLoading && <p>Loading...</p>}
      {data2 && !isError && <p>Saved!</p>}
      {isError && <p>Error!</p>}

      <h1>React EditorJS</h1>
      <div className="container mx-auto p-8">
        <h2>EditorJS with React</h2>
        <div>
          <ReactEditorJS autofocus data={data} onChange={setData} holder='editorjs' />
        </div>
        <h2>Output</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({query}: {query: {[key: string]: string}}) {
  if (!query.page) return {notFound: true}

  const data = await getPageBySlug(query.page);

  if (!data.data) return {notFound: true};

  return {
    props: {
      data: data.data.content
    }
  }
}
