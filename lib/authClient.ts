import { createAuthClient } from "better-auth/react";
import { secrets } from "./secrets";

export const authClient = createAuthClient({
  baseURL: secrets().NEXT_PUBLIC_BASE_URL,
});
