import FormButton from "@/app/components/formButton";
import Link from "next/link";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

export default function Topup() {
  return (
    <>
      <label htmlFor="my_modal_7" className="text-info cursor-pointer">
        <FaCirclePlus size={40} />
      </label>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white">
          <h3 className="text-lg font-bold">Isi Saldo</h3>

          <form className="mt-8 flex flex-col gap-4">
            <div className="flex gap-3 text-xs md:text-base">
              <div className="flex flex-col font-light">
                <span>Minimal</span>
                <span>Maximal</span>
                <span>Bank Penerima</span>
                <span>Penerima Pembayaran</span>
                <span>Menerima Akun</span>
              </div>
              <div className="flex flex-col font-medium">
                <span>: Rp 90.000</span>
                <span>: Rp 9.999.999.999</span>
                <span>: CIMB NIAGA</span>
                <span>: IYAN</span>
                <span>: 707549223600</span>
              </div>
            </div>

            <div>
              <label htmlFor="bankCard" className="text-sm">
                Silahkan pilih saluran pembayaran
              </label>
              <select
                required
                id="bankCard"
                name="bankCard"
                className="select select-bordered w-full bg-transparent"
              >
                <option>BANK 1</option>
                <option>BANK 2</option>
                <option>BANK 3</option>
              </select>
            </div>

            <div>
              <label htmlFor="topup" className="text-sm">
                Isi Ulang Jumlah
              </label>
              <input
                id="topup"
                className="input input-bordered w-full bg-transparent"
                name="topupAmount"
                required
                type="number"
              />
            </div>

            <div>
              <label htmlFor="voucher" className="text-sm">
                Isi Ulang Jumlah
              </label>
              <input
                id="voucher"
                className="file-input file-input-bordered w-full bg-transparent"
                name="voucher"
                required
                type="file"
                accept=".jpg, .png, .jpeg"
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
