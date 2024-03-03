"use client";
import { useRouter } from "next/navigation";
import { VscError } from "react-icons/vsc";

export default function ResetPasswordUserNotFound() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center w-screen h-screen p-4">
      <title>Blibli - User Not Found</title>

      <div className="card bg-white shadow-xl text-slate-600 w-full max-w-md py-6">
        <div className="card-body flex flex-col items-center justify-center gap-4 py-4">
          <VscError size={100} className="text-error" />
          <h1 className="text-4xl font-semibold">Error</h1>
          <p className="py-4 text-2xl">User Not Found</p>
          <div
            className="btn btn-primary text-white text-lg"
            onClick={() => router.push("/resetPassword")}
          >
            OK
          </div>
        </div>
      </div>
    </div>
  );
}
