import Image from "next/image";
import FormLogin from "./form";
import Link from "next/link";
import LoginRegisterRouteSecure from "@/app/components/loginRegisterRouteSecure";

export default function Login() {
  return (
    <LoginRegisterRouteSecure>
      <div className="flex justify-center items-center px-4 py-8">
        <div className="card max-w-sm bg-base-100">
          <div className="card-body">
            <div className="text-center flex flex-col items-center justify-center gap-2">
              <Image alt="logo" width={75} height={75} src={"/logoimg.png"} />
              <h1 className="font-semibold text-2xl mt-6">Welcome Back</h1>

              <FormLogin />

              <div className="flex justify-between w-full text-start text-sm font-medium text-gray-400 mt-4">
                <p>Forgot Password?</p>
                <Link href={"/login"} className="text-primary">
                  Reset Password
                </Link>
              </div>

              <div className="mt-8 flex flex-col gap-4 w-full">
                <p className="font-medium text-sm">Dont have any account?</p>
                <Link
                  href={"/register"}
                  className="text-primary font-semibold btn rounded-2xl bg-primary/20 hover:bg-primary/15"
                >
                  Register For Free Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginRegisterRouteSecure>
  );
}
