"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaPowerOff } from "react-icons/fa6";

export default function Logout() {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-between cursor-pointer"
      onClick={() => (
        signOut({ redirect: false }),
        router.push("/login"),
        setTimeout(() => window.location.reload(), 500)
      )}
    >
      <div className="flex items-center gap-3">
        <div className="bg-red-500/80 p-3 rounded-xl">
          <FaPowerOff size={20} />
        </div>
        <p className="text-red-500 text-sm md:text-base">Keluar</p>
      </div>
      <div className="text-blue-500 font-bold">{">"}</div>
    </div>
  );
}
