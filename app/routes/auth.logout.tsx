// app/routes/auth/logout.ts
import type { ActionArgs } from "@remix-run/node";

import { redirect } from "@remix-run/node";
import { sessionStorage } from "~/utils/session.server";

export const action = async ({ request }: ActionArgs) => {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  const logoutURL = new URL(process.env.AUTH0_LOGOUT_URL as string); // i.e https://YOUR_TENANT.us.auth0.com/v2/logout

  logoutURL.searchParams.set(
    "client_id",
    process.env.AUTH0_CLIENT_ID as string
  );
  logoutURL.searchParams.set(
    "returnTo",
    process.env.AUTH0_RETURN_TO_URL as string
  );

  return redirect(logoutURL.toString(), {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
};
