import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import Button from "editorjs-button";
import Undo from "editorjs-undo";
import DragDrop from "editorjs-drag-drop";
import Color from "editorjs-text-color-plugin";
import { ItalicInlineTool, StrongInlineTool, UnderlineInlineTool } from "editorjs-inline-tool";

export const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  header: Header,
  list: {
    class: List,
    inlineToolbar: true,
  },
  image: SimpleImage,
  table: Table,
  button: Button,
  undo: Undo,
  dragDrop: DragDrop,
  italic: ItalicInlineTool,
  strong: StrongInlineTool,
  underline: UnderlineInlineTool,
  color: Color,
}
