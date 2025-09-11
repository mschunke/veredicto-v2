import { toNextJsHandler } from "better-auth/next-js";
import { getAuth } from "@/lib/auth";

const _handlerPromise = (async () => {
  const auth = await getAuth();
  return toNextJsHandler(auth);
})();

export async function GET(request: Request) {
  const handler = (await _handlerPromise) as any;
  return handler.GET(request);
}

export async function POST(request: Request) {
  const handler = (await _handlerPromise) as any;
  return handler.POST(request);
}
