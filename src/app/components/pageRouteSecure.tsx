/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import LoadingSpinner from "./loading";

export default function PageRouteSecure({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (session) {
    return <>{children}</>;
  } else {
    router.push("/login");
  }
}
