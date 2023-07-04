import {
  LoaderArgs,
  LoaderFunction,
  V2_MetaFunction,
  json,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticator } from "~/utils/auth.server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request }: LoaderArgs) {
  // const user = await authenticator.isAuthenticated(request, {
  //   failureRedirect: process.env.FAILURE_REDIRECT as string,
  // });

  return json({
    user: {
      email: "mattveraldi@gmail.com",
    },
  });
}

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();
  return (
    <div>
      <h1 className="text-2xl">Dashboard</h1>
      <div>
        <article
          style={{
            maxWidth: 150,
            minHeight: 150,
            background: "rgba(0,0,0,.2)",
          }}
        ></article>
      </div>
    </div>
  );
}
