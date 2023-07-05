import ReactFlow, { Background, Controls, NodeTypes } from "reactflow";
import "reactflow/dist/style.css";
import { Palette } from "~/components/Palette";
import { IconNode } from "~/components/node-types/IconNode";
import { paletteItems } from "~/components/paletteItems";
import useStore from "~/hooks/useStore";

export default function Diagram() {
  const flowProps = useFlow();
  return (
    <div style={{ width: "100vw", height: "100vh", padding: 0, margin: 0 }}>
      <ReactFlow {...flowProps}>
        <Background />
        <Controls />
        <Palette />
      </ReactFlow>
    </div>
  );
}

const nodeTypes: NodeTypes = {};
// generate nodes from svg descriptor
paletteItems.forEach((item) => {
  nodeTypes[item.action] = () => (
    <IconNode SVGIcon={item.svg} name={item.action} />
  );
});

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
