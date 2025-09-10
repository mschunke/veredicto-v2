enum SECRET_KEY {
  GEMINI_API_KEY = "GEMINI_API_KEY",
  APP_BASE_URL = "APP_BASE_URL",
  MONGO_URI = "MONGO_URI",
  STRIPE_SECRET = "STRIPE_SECRET",
  STRIPE_WH_SECRET = "STRIPE_WH_SECRET",
  NEXT_PUBLIC_STRIPE_PK = "NEXT_PUBLIC_STRIPE_PK",
  BREVO_API_KEY = "BREVO_API_KEY",
  BETTER_AUTH_SECRET = "BETTER_AUTH_SECRET",
  BETTER_AUTH_URL = "BETTER_AUTH_URL",
}

export function secrets(): Record<keyof typeof SECRET_KEY, string> {
  // Validate that all values exist before returning

  for (const key of Object.values(SECRET_KEY)) {
    if (!process.env[key]) {
      throw new Error(`Missing environment variable: ${key}`);
    }
  }

  return {
    [SECRET_KEY.GEMINI_API_KEY]: process.env[
      SECRET_KEY.GEMINI_API_KEY
    ] as string,
    [SECRET_KEY.APP_BASE_URL]: process.env[SECRET_KEY.APP_BASE_URL] as string,
    [SECRET_KEY.MONGO_URI]: process.env[SECRET_KEY.MONGO_URI] as string,
    [SECRET_KEY.STRIPE_SECRET]: process.env[SECRET_KEY.STRIPE_SECRET] as string,
    [SECRET_KEY.STRIPE_WH_SECRET]: process.env[
      SECRET_KEY.STRIPE_WH_SECRET
    ] as string,
    [SECRET_KEY.NEXT_PUBLIC_STRIPE_PK]: process.env[
      SECRET_KEY.NEXT_PUBLIC_STRIPE_PK
    ] as string,
    [SECRET_KEY.BREVO_API_KEY]: process.env[SECRET_KEY.BREVO_API_KEY] as string,
    [SECRET_KEY.BETTER_AUTH_SECRET]: process.env[
      SECRET_KEY.BETTER_AUTH_SECRET
    ] as string,
    [SECRET_KEY.BETTER_AUTH_URL]: process.env[
      SECRET_KEY.BETTER_AUTH_URL
    ] as string,
  };
}
