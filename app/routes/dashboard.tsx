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
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: process.env.FAILURE_REDIRECT as string,
  });

  return json({ user });
}

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome {loaderData.user.email}</h1>
    </div>
  );
}
