import { Handle, Position } from "reactflow";
import { DatabaseSVG } from "../svgs";

export function DatabaseNode() {
  return (
    <div>
      <Handle className="opacity-30" type="target" position={Position.Right} />
      <Handle className="opacity-30" type="source" position={Position.Left} />
      <div className="p-2">{DatabaseSVG}</div>
    </div>
  );
}
