import FormButton from "@/app/components/formButton";
import { IoIosSend, IoMdAddCircle } from "react-icons/io";

export default function CreateNewPaymentMethod() {
  return (
    <>
      <label htmlFor="my_modal_7" className="btn btn-success mb-4">
        <IoMdAddCircle size={20} />
        Tambah
      </label>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white text-black">
          <h3 className="text-lg font-bold mb-4">Tambah Informasi Penarikan</h3>

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
              <label className="btn btn-warning" htmlFor="my_modal_7">
                Close
              </label>
              <FormButton text="Kirimkan" icon={<IoIosSend size={20} />} />
            </div>
          </form>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor="my_modal_7"
        ></label>
      </div>
    </>
  );
}
