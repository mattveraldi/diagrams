import type { LoaderArgs } from "@remix-run/node";

import { authenticator } from "~/utils/auth.server";

export const loader = ({ request }: LoaderArgs) => {
  console.warn(request);
  return authenticator.authenticate("auth0", request, {
    successRedirect: process.env.SUCCESS_REDIRECT as string,
    failureRedirect: process.env.FAILURE_REDIRECT as string,
  });
};
