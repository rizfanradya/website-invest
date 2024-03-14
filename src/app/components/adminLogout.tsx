"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

export default function AdminLogout() {
  const router = useRouter();
  return (
    <li
      onClick={() => (
        signOut({ redirect: false }),
        router.push("/login"),
        setTimeout(() => window.location.reload(), 500)
      )}
    >
      <span className="text-slate-600">
        <FiLogOut size={20} />
        Logout
      </span>
    </li>
  );
}
