import Image from "next/image";
import Link from "next/link";
import FormRegister from "./form";
import LoginRegisterRouteSecure from "@/app/components/loginRegisterRouteSecure";

export default function Register() {
  return (
    <LoginRegisterRouteSecure>
      <div className="flex justify-center items-center px-4 py-8">
        <div className="card max-w-sm bg-base-100">
          <div className="card-body">
            <div className="text-center flex flex-col items-center justify-center gap-2">
              <Image alt="logo" width={75} height={75} src={"/logoimg.png"} />
              <h1 className="font-semibold text-2xl mt-6">
                Create Account Free
              </h1>

              <FormRegister />

              <div className="mt-4 flex flex-col gap-10">
                <p className="text-start text-sm text-gray-500">
                  By tapping &quot;Sign Up&quot; you accept our{" "}
                  <span className="text-primary font-semibold">terms</span> and{" "}
                  <span className="text-primary font-semibold">condition</span>
                </p>

                <Link href={"/login"} className="font-medium">
                  Already have an account?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginRegisterRouteSecure>
  );
}
