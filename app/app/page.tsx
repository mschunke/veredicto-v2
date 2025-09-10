"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/authClient";

export default async function AppMain() {
  const router = useRouter();

  const onSignOut = async () => {
    const res = await authClient.signOut();
    if (res.data?.success) {
      router.push("/signin");
    }
  };
  return (
    <div>
      App
      <div>
        <Button onClick={onSignOut}>Sign out</Button>
      </div>
    </div>
  );
}
