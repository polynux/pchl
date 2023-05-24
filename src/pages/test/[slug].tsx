import type { PagesRecord } from '@/@types/pocketbase-types';
import Layout from '@/layouts/Home'
import { getPageBySlug } from '@/utils/pb'

function parseBoldText(text: string) {
  const parts = text.split(/(<b>.*?<\/b>)/g);
  const result = [];
  for (let i = 0; i < parts.length; i++) {
    if (parts[i]?.startsWith('<b>')) {
      result.push(<b key={i}>{parts[i]?.slice(3, -4)}</b>)
    } else {
      result.push(parts[i])
    }
  }
  return result;
}

function Paragraph({ text }: { text: string }) {
  return <p className='text-xl'>{parseBoldText(text)}</p>
}

function Heading({ text, level }: { text: string, level: number }) {
  switch (level) {
    case 1:
      return (
        <>
          <h1 className='font-poppins text-5xl'>{text}</h1>
          <div className="line h-1 w-full bg-black"></div>
        </>
      )
    case 2:
      return <h2 className='text-2xl'>{text}</h2>
    case 3:
      return <h3>{text}</h3>
    default:
      return <h4>{text}</h4>
  }
}

type ParagraphBlock = {
  type: 'paragraph',
  data: {
    text: string,
  },
  id: string,
}

type HeaderBlock = {
  type: 'header',
  data: {
    text: string,
    level: number,
  },
  id: string,
}

type Block = ParagraphBlock | HeaderBlock;

type Content = {
  blocks: Block[],
  version: string,
  time: number,
}

export default function Page({ data }: { slug: string, data: PagesRecord<Content> }) {
  return (
    <Layout title={data.title}>
      <div className="container mx-auto p-8">
        <p>Here is the content rendered:</p>
        <div className="flex flex-col gap-6">
          {data.content && data.content.blocks.map((block, index): (JSX.Element | null) => {
            switch (block.type) {
              case 'paragraph':
                return <Paragraph key={index} text={block.data.text} />
              case 'header':
                return <Heading key={index} text={block.data.text} level={block.data.level} />
              default:
                return <p key={index}>Unknown block type: <pre>{JSON.stringify(block, null, 2)}</pre></p>
            }
          })}
        </div>
      </div>
      <pre>{JSON.stringify(data.content, null, 2)}</pre>
    </Layout>
  )
}

export async function getServerSideProps({ params }: { params: { slug: string } }) {
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
