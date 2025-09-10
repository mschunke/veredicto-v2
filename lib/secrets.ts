enum SECRET_KEY {
  GEMINI_API_KEY = "GEMINI_API_KEY",
  MONGO_URI = "MONGO_URI",
  STRIPE_SECRET = "STRIPE_SECRET",
  STRIPE_WH_SECRET = "STRIPE_WH_SECRET",
  BREVO_API_KEY = "BREVO_API_KEY",
  BETTER_AUTH_SECRET = "BETTER_AUTH_SECRET",
  BETTER_AUTH_URL = "BETTER_AUTH_URL",
}

enum VARIBALE_KEY {
  NEXT_PUBLIC_BASE_URL = "NEXT_PUBLIC_BASE_URL",
  NEXT_PUBLIC_STRIPE_PK = "NEXT_PUBLIC_STRIPE_PK",
}

export function secrets(): Record<
  keyof typeof SECRET_KEY | keyof typeof VARIBALE_KEY,
  string
> {
  // Validate that all values exist before returning

  return {
    [SECRET_KEY.GEMINI_API_KEY]: process.env[
      SECRET_KEY.GEMINI_API_KEY
    ] as string,
    [SECRET_KEY.MONGO_URI]: process.env[SECRET_KEY.MONGO_URI] as string,
    [SECRET_KEY.STRIPE_SECRET]: process.env[SECRET_KEY.STRIPE_SECRET] as string,
    [SECRET_KEY.STRIPE_WH_SECRET]: process.env[
      SECRET_KEY.STRIPE_WH_SECRET
    ] as string,
    [SECRET_KEY.BREVO_API_KEY]: process.env[SECRET_KEY.BREVO_API_KEY] as string,
    [SECRET_KEY.BETTER_AUTH_SECRET]: process.env[
      SECRET_KEY.BETTER_AUTH_SECRET
    ] as string,
    [SECRET_KEY.BETTER_AUTH_URL]: process.env[
      SECRET_KEY.BETTER_AUTH_URL
    ] as string,

    [VARIBALE_KEY.NEXT_PUBLIC_BASE_URL]: process.env[
      VARIBALE_KEY.NEXT_PUBLIC_BASE_URL
    ] as string,
    [VARIBALE_KEY.NEXT_PUBLIC_STRIPE_PK]: process.env[
      VARIBALE_KEY.NEXT_PUBLIC_STRIPE_PK
    ] as string,
  };
}
