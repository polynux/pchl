import dynamic from 'next/dynamic'
import Layout from '@/layouts/Home'
import { useState } from 'react'
import { OutputData } from "@editorjs/editorjs";

const ReactEditorJS = dynamic(() => import('@/components/ReactEditor'), {
  ssr: false
})

export default function Editor() {
  const [data, setData] = useState<OutputData>()
  return (
    <Layout title='React EditorJS'>
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
