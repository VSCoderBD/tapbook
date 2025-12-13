"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "./hooks/useAuth";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) {
      router.replace("/");
    } else {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="opacity-60">HomePage</p>
    </div>
  );
}
