import FormButton from "@/app/components/formButton";
import { FaEdit } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function UpdatePaymentMethod({ doc }: { doc: { id: number } }) {
  return (
    <>
      <label
        htmlFor={`update${doc.id.toString()}`}
        className="btn btn-info btn-sm"
      >
        <FaEdit size={20} />
      </label>

      <input
        type="checkbox"
        id={`update${doc.id.toString()}`}
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white text-black">
          <h3 className="text-lg font-bold mb-4">Edit Informasi Penarikan</h3>

          <form className="flex flex-col gap-4">
            <div>
              <label className="text-sm" htmlFor="cardType">
                Jenis Nomor Kartu
              </label>
              <select
                className="select select-bordered w-full bg-transparent"
                id="cardType"
                required
                name="cardType"
              >
                <option>BANK 1</option>
                <option>BANK 2</option>
                <option>BANK 3</option>
              </select>
            </div>

            <div>
              <label className="text-sm" htmlFor="nameAccount">
                Nama Akun
              </label>
              <input
                required
                id="nameAccount"
                className="input input-bordered w-full bg-transparent"
                name="nameAccount"
                defaultValue={"BANK"}
              />
            </div>

            <div>
              <label className="text-sm" htmlFor="backupMobileNumber">
                Cadangan Nomor Ponsel
              </label>
              <input
                required
                type="tel"
                id="backupMobileNumber"
                className="input input-bordered w-full bg-transparent"
                name="backupMobileNumber"
                defaultValue={"0813****7989"}
              />
            </div>

            <div>
              <label className="text-sm" htmlFor="bankName">
                Nama Bank
              </label>
              <input
                required
                id="bankName"
                className="input input-bordered w-full bg-transparent"
                name="bankName"
                defaultValue={"BRI"}
              />
            </div>

            <div>
              <label className="text-sm" htmlFor="rekeningBank">
                Nomor Rekening
              </label>
              <input
                required
                id="rekeningBank"
                className="input input-bordered w-full bg-transparent"
                name="rekeningBank"
                defaultValue={"763476324544345"}
              />
            </div>

            <div>
              <label className="text-sm" htmlFor="withdrawPassword">
                Kata Sandi Penarikan
              </label>
              <input
                required
                type="password"
                id="withdrawPassword"
                className="input input-bordered w-full bg-transparent"
                name="withdrawPassword"
              />
            </div>

            <div className="modal-action">
              <label
                className="btn btn-warning"
                htmlFor={`update${doc.id.toString()}`}
              >
                Close
              </label>
              <FormButton text="Kirimkan" icon={<IoIosSend size={20} />} />
            </div>
          </form>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor={`update${doc.id.toString()}`}
        ></label>
      </div>
    </>
  );
}
