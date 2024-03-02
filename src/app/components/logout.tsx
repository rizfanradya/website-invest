"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <div className="btn btn-error text-white" onClick={() => signOut()}>
      Logout
    </div>
  );
}
