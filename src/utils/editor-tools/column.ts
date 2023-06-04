import EditorJS, { BlockToolData, OutputBlockData, ToolConstructable } from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "../tools";

type ColumnData = {
  blocksData: OutputBlockData[][];
};

type ColumnConfig = {
  tools: ToolConstructable[] | any;
};

class ColumnTool {
  private data: ColumnData;
  private wrapper: HTMLElement | undefined;
  private tools: { [name: symbol]: any };
  private editors: EditorJS[];

  constructor({ data, config }: { data?: ColumnData; config?: ColumnConfig }) {
    console.log("ColumnTool constructor");
    console.log(data);
    this.data = data ?? { blocksData: [[]] };
    this.wrapper = undefined;
    this.tools = config?.tools ?? EDITOR_JS_TOOLS;
    this.editors = [];
  }

  static get toolbox() {
    return {
      title: "Column",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z"/></svg>`,
    };
  }

  static get enableLineBreaks() {
    return true;
  }

  createColumn() {
    const column = document.createElement("div");
    column.classList.add(
      "flex",
      "flex-col",
      "w-1/2",
      "border",
      "border-gray-300",
      "rounded-md"
    );
    return column;
  }

  render() {
    if (!this.wrapper) this.wrapper = document.createElement("div");

    const child = document.createElement("div");
    child.classList.add("flex", "flex-row", "w-full", "space-x-4");

    const blocksData: BlockToolData[] = this.data.blocksData;

    for (let i = 0; i < 2; i++) {
      const column = this.createColumn();
      const editor = new EditorJS({
        holder: column,
        tools: this.tools,
        async onChange(api) {
          const data = await api.saver.save();
          blocksData[i] = data.blocks;
        },
        data: {
          blocks: this.data.blocksData[i] || [],
        },
      });
      child.appendChild(column);
      this.editors.push(editor);
    }
    this.wrapper.appendChild(child);

    this.data.blocksData = blocksData;

    return this.wrapper;
  }

  save() {
    return {
      blocksData: this.data.blocksData,
    };
  }

  destroy() {
    this.editors.forEach((editor) => editor.destroy());
    this.wrapper?.remove();
  }
}

export default ColumnTool;
