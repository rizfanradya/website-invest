"use client";
import PageRouteSecure from "@/app/components/pageRouteSecure";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <PageRouteSecure>
      <div className="flex items-center justify-center text-center flex-col h-screen gap-6">
        <p className="font-bold text-4xl">DASHBOARD</p>
        <button
          onClick={() => {
            signOut({ redirect: false }), router.push("/login");
          }}
          className="btn btn-primary text-2xl"
        >
          LOGOUT
        </button>
      </div>
    </PageRouteSecure>
  );
}
