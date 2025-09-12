// import { headers } from "next/headers";
// import { redirect } from "next/navigation";
import { NuqsAdapter } from "nuqs/adapters/next/app";
// import { auth } from "@/lib/auth";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });

  // if (!session) {
  //   redirect("/signin");
  // }

  return (
    <div className="w-screen h-screen">
      <NuqsAdapter>{children}</NuqsAdapter>
    </div>
  );
}
