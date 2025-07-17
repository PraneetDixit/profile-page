"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the user info page on initial load
    router.push("/userinfo");
  }, [router]);

  return <div></div>;
}
