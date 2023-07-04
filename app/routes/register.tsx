import { Form } from "@remix-run/react";

// app/routes/register.tsx
export default function Register() {
  return (
    <Form action="/auth/auth0?screen_hint=signup" method="post">
      <button>Register with Auth0</button>
    </Form>
  );
}

// https://auth0.com/docs/authenticate/login/auth0-universal-login/new-experience#signup
