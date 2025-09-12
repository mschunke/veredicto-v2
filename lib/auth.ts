import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { createMongoDb } from "./mongo";
import { secrets } from "./secrets";

export const auth = betterAuth({
  secret: secrets().BETTER_AUTH_SECRET,
  // Use server-side URL for auth to ensure cookies and redirects use the deployed origin
  baseURL: secrets().BETTER_AUTH_URL,
  database: mongodbAdapter(createMongoDb()),
  plugins: [nextCookies()],
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
  },
});
