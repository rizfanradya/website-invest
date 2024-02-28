import Image from "next/image";
import Link from "next/link";
import FormRegister from "./form";

export default function Register() {
  return (
    <div className="bg-slate-200 flex justify-center items-center px-4 py-8">
      <div className="card max-w-sm bg-white shadow-xl">
        <div className="card-body">
          <div className="text-center flex flex-col items-center justify-center gap-2">
            <Image alt="logo" width={75} height={75} src={"/logo.svg"} />
            <h1 className="font-semibold text-2xl mt-6">Create Account Free</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              vel.
            </p>

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
  );
}
