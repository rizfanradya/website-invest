"use client";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import LoadingSpinner from "./loading";
import { useRouter } from "next/navigation";

export default function LoginRegisterRouteSecure({
  children,
}: {
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (session) {
    router.push("/");
  } else {
    return <>{children}</>;
  }
}
