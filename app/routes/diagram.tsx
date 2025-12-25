import ReactFlow, { Background, Controls, NodeTypes } from "reactflow";
import "reactflow/dist/style.css";
import { Palette } from "~/components/Palette";
import { IconNode } from "~/components/node-types/IconNode";
import useStore from "~/hooks/useStore";
import kit from "../mocks/kit.json";

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
kit.forEach((item) => {
  nodeTypes[item.name] = () => <IconNode svg={item.svg} name={item.name} />;
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
