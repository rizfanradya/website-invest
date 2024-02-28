"use client";
import PageRouteSecure from "@/app/components/pageRouteSecure";
import { signOut } from "next-auth/react";

export default function Dashboard() {
  return (
    <PageRouteSecure>
      <div className="flex items-center justify-center text-center flex-col h-screen gap-6">
        <p className="font-bold text-4xl">DASHBOARD</p>
        <button
          onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
          className="btn btn-primary text-2xl"
        >
          LOGOUT
        </button>
      </div>
    </PageRouteSecure>
  );
}
