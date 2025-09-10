import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { createMongoDb } from "./mongo";
import { secrets } from "./secrets";

export const auth = betterAuth({
  secret: secrets().BETTER_AUTH_SECRET,
  baseURL: secrets().NEXT_PUBLIC_BASE_URL,
  database: mongodbAdapter(createMongoDb()),
  plugins: [nextCookies()],
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
  },
});
