import FormButton from "@/app/components/formButton";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

export default async function DeleteUser({ doc }: { doc: { id: number } }) {
  async function onSubmit(formData: FormData) {
    "use server";
    const id: any = formData.get("id");

    async function handleSubmit() {
      try {
        const response = await prisma.user.delete({
          where: { id: parseInt(id) },
        });
        return { message: "ok", response };
      } catch (error) {
        return { message: "error", error };
      }
    }

    const result = await handleSubmit();
    if (result.message === "ok") {
      revalidatePath("/admin/userManagement");
    } else {
      redirect("/serverError");
    }
  }

  return (
    <>
      <label htmlFor={`delete${doc.id}`} className="text-error cursor-pointer">
        <MdDelete size={25} />
      </label>

      <input type="checkbox" id={`delete${doc.id}`} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white">
          <h3 className="text-lg font-bold">delete</h3>
          <p>Apakah anda yakin ingin menghapus user tersebut?</p>

          <form className="my-6 flex flex-col gap-4" action={onSubmit}>
            <input
              hidden
              name="id"
              required
              className="hidden"
              defaultValue={doc.id}
            />

            <div className="modal-action">
              <label
                className="btn btn-error text-white btn-sm"
                htmlFor={`delete${doc.id}`}
              >
                <IoClose size={20} />
                Close
              </label>
              <FormButton
                text="Delete"
                color="btn-success"
                icon={<MdDelete size={20} />}
                size="btn-sm"
                textColor="text-white"
              />
            </div>
          </form>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor={`delete${doc.id}`}
        ></label>
      </div>
    </>
  );
}
