import { Handle, Position } from "reactflow";
import { CreateUserSVG } from "../svgs";

export function UserNode() {
  return (
    <div className="flex flex-col items-center">
      <Handle className="opacity-30" type="target" position={Position.Right} />
      <Handle className="opacity-30" type="source" position={Position.Left} />
      <div className="p-2 pb-1">{CreateUserSVG}</div>
      <input className="text-xs w-6" defaultValue="user" />
    </div>
  );
}
