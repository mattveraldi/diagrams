import invariant from "tiny-invariant";

invariant(process.env.DATABASE_URL);
invariant(process.env.AUTH0_CLIENT_ID);
invariant(process.env.AUTH0_CLIENT_SECRET);
invariant(process.env.AUTH0_DOMAIN);
invariant(process.env.AUTH0_CALLBACK_URL);
invariant(process.env.AUTH0_RETURN_TO_URL);
