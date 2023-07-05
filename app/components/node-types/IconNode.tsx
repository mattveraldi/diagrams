import { ReactElement, useState } from "react";
import { Handle, Position } from "reactflow";

export function IconNode(props: { SVGIcon: ReactElement; name: string }) {
  const [textLength, setTextLength] = useState<number>(props.name.length);
  return (
    <div className="flex flex-col items-center">
      <Handle className="opacity-30" type="target" position={Position.Right} />
      <Handle className="opacity-30" type="source" position={Position.Left} />
      <div className="p-2 pb-1">{props.SVGIcon}</div>
      <input
        style={{ width: textLength + "ch" }}
        className="text-xs"
        defaultValue={props.name}
        onChange={(event) => {
          const charLength = event.target.value.length;
          if (charLength > 0) {
            setTextLength(charLength);
          }
        }}
      />
    </div>
  );
}
