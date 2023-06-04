import { memo, useEffect, useRef } from "react";
import EditorJS, { ToolConstructable } from "@editorjs/editorjs";
import type { OutputData } from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "@/utils/tools";
// @ts-expect-error Undo is not a valid tool
import Undo from "editorjs-undo";
// @ts-expect-error DragDrop is not a valid tool
import DragDrop from "editorjs-drag-drop";
import ColumnTool from "@/utils/editor-tools/column";

import "@/styles/editor.css";

type Props = {
  data?: OutputData;
  onChange(val: OutputData): void;
  holder: string;
  autofocus?: boolean;
};

const EditorBlock = ({ data, onChange, holder, autofocus }: Props) => {
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: {
          ...EDITOR_JS_TOOLS,
          column: {
            class: ColumnTool as ToolConstructable,
            config: {
              tools: EDITOR_JS_TOOLS,
            },
          },
        },
        data,
        autofocus,
        onReady: () => {
          new Undo({ editor });
          new DragDrop(editor);
        },
        async onChange(api) {
          try {
            const data = await api.saver.save();
            onChange(data);
          } catch (error) {
            console.log("Saving failed: ", error);
          }
        },
      });
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <div id={holder} />;
};

export default memo(EditorBlock);
