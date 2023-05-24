import dynamic from 'next/dynamic'
import Layout from '@/layouts/Home'
import { useState } from 'react'
import { OutputData } from "@editorjs/editorjs";
import { api } from '@/utils/api';

const ReactEditorJS = dynamic(() => import('@/components/ReactEditor'), {
  ssr: false
})

export default function Editor() {
  const [data, setData] = useState<OutputData>()
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
          <ReactEditorJS data={data} onChange={setData} holder='editorjs' />
        </div>
        <h2>Output</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Layout>
  )
}
