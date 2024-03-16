import Image from "next/image";
import FormLogin from "./form";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session: any = await getServerSession();
  if (session) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center px-4 py-8">
      <title>Blibli - Login</title>
      <div className="card max-w-sm bg-white text-black">
        <div className="card-body">
          <div className="text-center flex flex-col items-center justify-center gap-2">
            <Image alt="logo" width={125} height={125} src={"/logo.png"} />
            <h1 className="font-semibold text-2xl mt-6">Welcome Back</h1>

            <FormLogin />

            <div className="flex justify-between w-full text-start text-sm font-medium text-gray-400 mt-4">
              <p>Forgot Password?</p>
              <Link href={"/resetPassword"} className="text-primary">
                Reset Password
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-4 w-full">
              <p className="font-medium text-sm">Dont have any account?</p>
              <Link
                href={"/register"}
                className="font-semibold text-white btn rounded-2xl btn-primary"
              >
                Register For Free Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
