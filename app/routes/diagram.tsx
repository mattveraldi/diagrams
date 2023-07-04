import ReactFlow, { Background, Controls, NodeTypes } from "reactflow";
import "reactflow/dist/style.css";
import { ClientOnly } from "remix-utils";
import { Palette } from "~/components/Palette";
import { UserNode } from "~/components/node-types/ActorNode";
import useStore from "~/hooks/useStore";

export default function Diagram() {
  const flowProps = useFlow();
  return (
    <ClientOnly fallback={null}>
      {() => (
        <div style={{ width: "100vw", height: "100vh", padding: 0, margin: 0 }}>
          <ReactFlow {...flowProps}>
            <Background />
            <Controls />
            <Palette />
          </ReactFlow>
        </div>
      )}
    </ClientOnly>
  );
}

const nodeTypes: NodeTypes = {
  user: UserNode,
};
function useFlow() {
  const { nodes, edges, onConnect, onEdgesChange, onNodesChange } = useStore();
  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    nodeTypes,
  };
}
