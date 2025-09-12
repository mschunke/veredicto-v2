"use server";

import { auth } from "@/lib/auth";
import type { SigninFormType } from "./signin/signinForm";
import type { SignupFormType } from "./signup/signupForm";

export async function signUp(signupForm: SignupFormType) {
  const { email, password, name } = signupForm;

  if (!email || !password || !name) {
    throw new Error("Email, password, and name are required");
  }

  const user = await auth.api.signUpEmail({
    body: {
      email,
      name,
      password,
    },
  });

  return user;
}

export async function signIn(signinForm: SigninFormType) {
  const { email, password } = signinForm;

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  return user;
}
