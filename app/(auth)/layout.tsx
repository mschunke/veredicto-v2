import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { getAuth } from "@/lib/auth";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await getAuth();
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/app");
  }

  return (
    <div className="w-screen h-screen">
      <NuqsAdapter>
        <div className="w-full min-h-screen flex">
          <div className="w-1/2 flex items-center justify-center">
            {children}
          </div>
          <div className="w-1/2 bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white p-8">
              Welcome to Veredicto
            </h2>
          </div>
        </div>
      </NuqsAdapter>
    </div>
  );
}
