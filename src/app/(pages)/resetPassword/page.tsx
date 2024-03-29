import Image from "next/image";
import Link from "next/link";
import prisma from "@/utils/db";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import FormButton from "@/app/components/formButton";
import { getServerSession } from "next-auth";

export default async function ResetPassword() {
  const session: any = await getServerSession();
  if (session) {
    redirect("/");
  }

  async function onSubmit(formData: FormData) {
    "use server";
    async function handleSubmit() {
      try {
        const username: any = formData.get("username");
        const password: any = formData.get("newPassword");
        const updatePwd = await prisma.user.update({
          where: { username },
          data: { password: await bcrypt.hash(password, 10) },
        });

        return { status: true, updatePwd };
      } catch (error) {
        return { status: false, error };
      }
    }
    const resultSubmit = await handleSubmit();
    if (resultSubmit.status) {
      redirect("/login");
    } else {
      redirect("/resetPasswordUserNotFound");
    }
  }

  return (
    <div className="flex justify-center items-center px-4 py-8">
      <title>Blibli - Reset Password</title>
      <div className="card max-w-sm bg-white text-black">
        <div className="card-body">
          <div className="text-center flex flex-col items-center justify-center gap-2">
            <Image alt="logo" width={125} height={125} src={"/logo.png"} />
            <h1 className="font-semibold text-2xl mt-6">Reset Password</h1>

            <form
              className="text-start w-full mt-8 flex flex-col gap-4"
              action={onSubmit}
            >
              <div className="flex items-center justify-between input input-bordered rounded-2xl bg-transparent">
                <input
                  id="Username"
                  type="text"
                  placeholder="Username"
                  className="w-full"
                  required
                  name="username"
                />
                <FaUserAlt size={"1.5em"} className="text-slate-500" />
              </div>

              <div className="flex items-center justify-between input input-bordered rounded-2xl bg-transparent">
                <input
                  id="Password"
                  type="password"
                  placeholder="New Password"
                  className="w-full"
                  required
                  name="newPassword"
                />
                <FaKey size={"1.5em"} className="text-slate-500" />
              </div>

              <Link href={"/login"} className="text-primary font-semibold mb-8">
                Login
              </Link>

              <FormButton
                text="Reset"
                color="btn-primary"
                textColor="text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
