import { Handle, Position } from "reactflow";
import { CreateUserSVG } from "../svgs";

export function UserNode() {
  return (
    <div>
      <Handle className="opacity-30" type="source" position={Position.Top} />
      <Handle className="opacity-30" type="source" position={Position.Right} />
      <Handle className="opacity-30" type="target" position={Position.Bottom} />
      <Handle className="opacity-30" type="target" position={Position.Left} />
      <div className="p-2">{CreateUserSVG}</div>
    </div>
  );
}
