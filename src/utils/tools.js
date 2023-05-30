import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import Button from "editorjs-button";
import Color from "editorjs-text-color-plugin";

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
  color: Color,
};
