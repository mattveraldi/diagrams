import { LoaderArgs, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/utils/auth.server";
import { sessionStorage } from "~/utils/session.server";

// in the loader of the login route
export async function loader({ request }: LoaderArgs) {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboard",
  });
  let session = await sessionStorage.getSession(request.headers.get("cookie"));
  let error = session.get(authenticator.sessionErrorKey as any);
  return json({ error });
}

export default function Login() {
  const error = useLoaderData();
  console.error(error);
  return (
    <Form action="/auth/auth0" method="post">
      <button>Login with Auth0</button>
    </Form>
  );
}
