import Image from "next/image";
import Link from "next/link";
import LoginRegisterRouteSecure from "@/app/components/loginRegisterRouteSecure";
import { FaKey, FaPhone } from "react-icons/fa6";
import { BiSolidDiscount } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import prisma from "@/utils/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { isEmail, isMobilePhone } from "validator";
import FormButton from "@/app/components/formButton";

export default function Register() {
  async function onSubmit(formData: FormData) {
    "use server";
    async function handleSubmit() {
      try {
        const username: any = formData.get("username");
        const email: any = formData.get("email");
        const noHp: any = formData.get("noHp");
        const password: any = formData.get("password");
        const kodeReferral: any = formData.get("kodeReferral");

        if (!username || !email || !password || !kodeReferral || !noHp) {
          return { status: false, message: "empty" };
        } else {
          const phoneValidator = isMobilePhone(noHp, "id-ID");
          const emailValidator = isEmail(email);

          if (phoneValidator && emailValidator) {
            const response = await prisma.user.create({
              data: {
                username,
                email,
                password: await bcrypt.hash(password, 10),
                referral: kodeReferral,
                noHp: noHp,
                balance: 30000,
                todayIncome: 0,
                yesterdayIncome: 0,
                cumulativeIncome: 0,
                teamBenefit: 0,
              },
            });
            return { status: false, message: "ok", response };
          } else {
            return { status: false, message: "notvalid" };
          }
        }
      } catch (error) {
        return { status: false, message: "error", error };
      }
    }

    const resultSubmit = await handleSubmit();
    if (resultSubmit.message === "error") {
      redirect("/registerUserAlreadyExist");
    } else if (resultSubmit.message === "empty") {
      redirect("/registerDataCannotBeEmpty");
    } else if (resultSubmit.message === "notvalid") {
      redirect("/registerDataNotValid");
    } else if (resultSubmit.message === "ok") {
      redirect("/login");
    }
  }

  return (
    <LoginRegisterRouteSecure>
      <title>Blibli - Register</title>
      <div className="flex justify-center items-center px-4 py-8">
        <div className="card max-w-sm bg-base-100">
          <div className="card-body">
            <div className="text-center flex flex-col items-center justify-center gap-2">
              <Image alt="logo" width={125} height={125} src={"/logo.png"} />
              <h1 className="font-semibold text-2xl mt-6">
                Create Account Free
              </h1>

              <form
                className="text-start w-full mt-8 flex flex-col gap-4"
                action={onSubmit}
              >
                <div className="flex items-center justify-between input input-bordered rounded-2xl">
                  <input
                    id="Username"
                    type="text"
                    className="w-full"
                    required
                    placeholder="Username"
                    name="username"
                  />
                  <FaUserAlt size={"1.5em"} className="text-slate-500" />
                </div>

                <div className="flex items-center justify-between input input-bordered rounded-2xl">
                  <input
                    id="Email"
                    type="email"
                    className="w-full"
                    required
                    placeholder="Email"
                    name="email"
                  />
                  <MdEmail size={"1.5em"} className="text-slate-500" />
                </div>

                <div className="flex items-center justify-between input input-bordered rounded-2xl">
                  <input
                    id="nohp"
                    type="tel"
                    className="w-full"
                    required
                    placeholder="Nomor Telepon"
                    name="noHp"
                  />
                  <FaPhone size={"1.5em"} className="text-slate-500" />
                </div>

                <div className="flex items-center justify-between input input-bordered rounded-2xl">
                  <input
                    id="Password"
                    type="password"
                    className="w-full"
                    required
                    placeholder="Password"
                    name="password"
                  />
                  <FaKey size={"1.5em"} className="text-slate-500" />
                </div>

                <div className="flex items-center justify-between input input-bordered rounded-2xl">
                  <input
                    id="Kode Referral"
                    type="text"
                    className="w-full"
                    required
                    placeholder="Kode Referral"
                    name="kodeReferral"
                  />
                  <BiSolidDiscount size={"1.5em"} className="text-slate-500" />
                </div>

                <FormButton text="Register" />
              </form>

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
