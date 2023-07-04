// app/utils/auth.server.ts
import { User } from "@prisma/client";
import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import { prisma } from "./prisma.server";
import { sessionStorage } from "./session.server";

// Create an instance of the authenticator, pass a generic with what your
// strategies will return and will be stored in the session
export const authenticator = new Authenticator<User>(sessionStorage, {
  sessionErrorKey: "auth-error",
});

let auth0Strategy = new Auth0Strategy(
  {
    callbackURL: process.env.AUTH0_CALLBACK_URL as string,
    clientID: process.env.AUTH0_CLIENT_ID as string,
    clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
    domain: process.env.AUTH0_DOMAIN as string,
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    let user = null;
    user = await prisma.user.findFirst({
      where: {
        email: profile.emails![0].value,
      },
    });
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: profile.emails![0].value,
        },
      });
    }
    return user;
  }
);

authenticator.use(auth0Strategy);
