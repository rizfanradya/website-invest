import FormButton from "@/app/components/formButton";
import { MdDelete } from "react-icons/md";

export default function DeletePaymentMethod({ doc }: { doc: { id: number } }) {
  return (
    <>
      <label
        htmlFor={`delete${doc.id.toString()}`}
        className="btn btn-error btn-sm"
      >
        <MdDelete size={20} />
      </label>

      <input
        type="checkbox"
        id={`delete${doc.id.toString()}`}
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold mb-4">Hapus Informasi Penarikan</h3>
          <p className="py-2">
            Apakah anda yakin ingin menghapus informasi penarikan ini?
          </p>

          <form className="flex flex-col gap-4">
            <input className="hidden" value={doc.id} required name="id" />
            <div className="modal-action">
              <label
                className="btn btn-warning"
                htmlFor={`delete${doc.id.toString()}`}
              >
                Close
              </label>
              <FormButton text="Hapus" icon={<MdDelete size={20} />} />
            </div>
          </form>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor={`delete${doc.id.toString()}`}
        ></label>
      </div>
    </>
  );
}
