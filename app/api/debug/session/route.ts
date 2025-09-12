import { headers as nextHeaders } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET() {
  const h = await nextHeaders();
  const cookies = h.get("cookie") ?? "";
  const host = h.get("host");
  const proto = h.get("x-forwarded-proto");
  const forwardedHost = h.get("x-forwarded-host");
  const forwardedFor = h.get("x-forwarded-for");
  const forwardedPort = h.get("x-forwarded-port");

  const session = await auth.api.getSession({ headers: h });

  return NextResponse.json({
    hasSession: Boolean(session),
    cookieLength: cookies.length,
    cookies: cookies.split("; ").filter(Boolean).slice(0, 10),
    host,
    proto,
    forwardedHost,
    forwardedFor,
    forwardedPort,
  });
}
