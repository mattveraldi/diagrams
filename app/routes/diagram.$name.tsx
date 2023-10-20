import { ActionArgs, LoaderArgs, json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import ReactFlow, {
  Background,
  Controls,
  NodeTypes,
  ReactFlowProps,
} from "reactflow";
import "reactflow/dist/style.css";
import { serverError } from "remix-utils";
import { Palette } from "~/components/Palette";
import { IconNode } from "~/components/node-types/IconNode";
import useStore from "~/hooks/useStore";
import { prisma } from "~/utils/prisma.server";
import { sessionStorage } from "~/utils/session.server";
import kit from "../mocks/kit.json";

export async function loader(args: LoaderArgs) {
  const session = await sessionStorage.getSession(
    args.request.headers.get("Cookie")
  );
  const user = session.get("user");
  if (!user) redirect("/login");
  return json({ user });
}

export async function action(args: ActionArgs) {
  const formData = await args.request.formData();
  const name = JSON.stringify(formData.get("diagram-name"));
  const nodes = JSON.stringify(formData.get("nodes"));
  const edges = JSON.stringify(formData.get("edges"));
  const session = await sessionStorage.getSession(
    args.request.headers.get("Cookie")
  );
  const user = session.get("user");
  if (!user) redirect("/login");
  if ([name, nodes, edges].every(Boolean)) {
    try {
      await prisma.diagram.create({
        data: {
          name,
          nodes,
          edges,
          userId: user.id,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
  console.error(name, nodes, edges);
  return serverError("Something went wrong");
}

export default function Diagram() {
  const flowProps = useFlow();
  return (
    <div style={{ width: "100vw", height: "100vh", padding: 0, margin: 0 }}>
      <ReactFlow {...flowProps}>
        <Background />
        <Controls />
        <Palette />
        <span className="flex justify-between items-center">
          <Form className="ml-4 z-10" method="POST">
            <input
              type="text"
              name="diagram-name"
              defaultValue="Diagramma senza nome"
            />
            <input
              name="nodes"
              value={JSON.stringify(flowProps.nodes)}
              hidden
            />
            <input
              name="edges"
              value={JSON.stringify(flowProps.edges)}
              hidden
            />
            <input type="submit" hidden />
          </Form>
          <span className="float-right mr-2 mt-2 z-10" aria-label="not saved">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              className="w-6 h-6 stroke-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
          </span>
        </span>
      </ReactFlow>
    </div>
  );
}

const nodeTypes: NodeTypes = {};
// generate nodes from svg descriptor
kit.forEach((item) => {
  nodeTypes[item.name] = () => <IconNode svg={item.svg} name={item.name} />;
});

function useFlow(): ReactFlowProps {
  const { nodes, edges, onConnect, onEdgesChange, onNodesChange } = useStore();
  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    nodeTypes,
    fitView: true,
  };
}
