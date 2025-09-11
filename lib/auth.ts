import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { createMongoDb } from "./mongo";
import { secrets } from "./secrets";

let _auth: ReturnType<typeof betterAuth> | null = null;

export async function getAuth() {
  if (_auth) return _auth;

  const s = secrets();

  // Lazily create DB connection and auth instance at runtime.
  const db = createMongoDb();

  _auth = betterAuth({
    secret: s.BETTER_AUTH_SECRET,
    baseURL: s.NEXT_PUBLIC_BASE_URL,
    database: mongodbAdapter(db),
    plugins: [nextCookies()],
    emailAndPassword: {
      enabled: true,
      minPasswordLength: 8,
    },
  });

  return _auth;
}
