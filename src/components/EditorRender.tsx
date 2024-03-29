import { PagesRecord } from "@/@types/pocketbase-types";

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

function Column({ blocksData }: { blocksData: Block[][] }) {
  if (blocksData.length === 0) return null;

  return (
    <div className="mb-4 flex flex-row gap-10">
      {blocksData.map((blocks, i) => {
        return (<div className="flex flex-col gap-6 w-1/2" key={"col-" + i}>{blocks.map(block => {
          switch (block.type) {
            case 'paragraph':
              return <Paragraph key={block.id} text={block.data.text} />
            case 'header':
              return <Heading key={block.id} text={block.data.text} level={block.data.level} />
            default:
              return null;
          }
        })}</div>)
      })}
    </div>
  )
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

type ColumnBlock = {
  type: 'column',
  data: {
    blocksData: Block[][],
  },
  id: string,
}

type Block = ParagraphBlock | HeaderBlock | ColumnBlock;

export type Content = {
  blocks: Block[],
  version: string,
  time: number,
}

export default function EditorRender({ data, className }: { data: PagesRecord<Content>, className?: string }) {
  return (
    <div className={className}>
      {data.content && data.content.blocks.map((block, index): (JSX.Element | null) => {
        switch (block.type) {
          case 'paragraph':
            return <Paragraph key={index} text={block.data.text} />
          case 'header':
            return <Heading key={index} text={block.data.text} level={block.data.level} />
          case 'column':
            return <Column key={index} blocksData={block.data.blocksData} />
          default:
            return <p key={index}>Unknown block type: <pre>{JSON.stringify(block, null, 2)}</pre></p>
        }
      })}
    </div>
  )
}

export { EditorRender };
