import FormButton from "@/app/components/formButton";
import prisma from "@/utils/db";
import { hash } from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { FaEdit } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { isEmail, isMobilePhone } from "validator";

export default async function UpdateUser({
  doc,
}: {
  doc: {
    id: number;
    username: string;
    email: string;
    noHp: string;
    referral: string;
    role: string;
  };
}) {
  async function onSubmit(formData: FormData) {
    "use server";
    const id: any = formData.get("id");
    const username: any = formData.get("username");
    const password: any = formData.get("password");
    const email: any = formData.get("email");
    const noHp: any = formData.get("noHp");
    const referral: any = formData.get("referral");
    const role: any = formData.get("role");

    async function handleSubmit() {
      if (!username || !email || !password || !referral || !noHp || !role) {
        return { message: "empty" };
      } else {
        try {
          const phoneValidator = isMobilePhone(noHp, "id-ID");
          const emailValidator = isEmail(email);

          if (phoneValidator && emailValidator) {
            const userData = await prisma.user.findUnique({
              where: { id: parseInt(id) },
            });

            const response = await prisma.user.update({
              data: {
                username,
                email,
                password: await hash(password, 10),
                referral,
                noHp,
                balance: userData?.balance,
                todayIncome: userData?.todayIncome,
                yesterdayIncome: userData?.yesterdayIncome,
                cumulativeIncome: userData?.cumulativeIncome,
                teamBenefit: userData?.teamBenefit,
                role,
              },
              where: { id: parseInt(id) },
            });
            return { message: "ok", response };
          } else {
            return { message: "notvalid" };
          }
        } catch (error) {
          return { message: "error", error };
        }
      }
    }

    const result = await handleSubmit();
    if (result.message === "error") {
      redirect("/serverError");
    } else if (result.message === "empty") {
      redirect("/dataCannotBeEmpty");
    } else if (result.message === "notvalid") {
      redirect("/dataNotValid");
    } else if (result.message === "ok") {
      revalidatePath("/admin/userManagement");
    }
  }

  return (
    <>
      <label htmlFor={`update${doc.id}`} className="text-info cursor-pointer">
        <FaEdit size={25} />
      </label>

      <input type="checkbox" id={`update${doc.id}`} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white">
          <h3 className="text-lg font-bold">Update</h3>

          <form className="my-6 flex flex-col gap-4" action={onSubmit}>
            <input
              hidden
              name="id"
              required
              className="hidden"
              value={doc.id}
            />

            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="capitalize text-gray-500 text-sm"
              >
                username
              </label>
              <input
                id="username"
                name="username"
                required
                className="input input-bordered input-sm bg-transparent"
                defaultValue={doc.username}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="capitalize text-gray-500 text-sm"
              >
                password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input input-bordered input-sm bg-transparent"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="capitalize text-gray-500 text-sm"
              >
                email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input input-bordered input-sm bg-transparent"
                defaultValue={doc.email}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="noHp"
                className="capitalize text-gray-500 text-sm"
              >
                Telepon
              </label>
              <input
                id="noHp"
                name="noHp"
                type="tel"
                required
                className="input input-bordered input-sm bg-transparent"
                defaultValue={doc.noHp}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="referral"
                className="capitalize text-gray-500 text-sm"
              >
                referral
              </label>
              <input
                id="referral"
                name="referral"
                required
                className="input input-bordered input-sm bg-transparent"
                defaultValue={doc.referral}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="role"
                className="capitalize text-gray-500 text-sm"
              >
                role
              </label>
              <select
                className="select select-bordered select-sm uppercase bg-transparent"
                name="role"
                id="role"
              >
                <option value={doc.role}>{doc.role}</option>
                <option value={"user"}>user</option>
                <option value={"admin"}>admin</option>
              </select>
            </div>

            <div className="modal-action">
              <label
                className="btn btn-error text-white btn-sm"
                htmlFor={`update${doc.id}`}
              >
                <IoClose size={20} />
                Close
              </label>
              <FormButton
                text="Update"
                color="btn-success"
                icon={<IoIosSend size={20} />}
                size="btn-sm"
                textColor="text-white"
              />
            </div>
          </form>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor={`update${doc.id}`}
        ></label>
      </div>
    </>
  );
}
