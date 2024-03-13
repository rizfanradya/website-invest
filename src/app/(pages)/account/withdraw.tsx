import FormButton from "@/app/components/formButton";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";

export default function Withdraw() {
  return (
    <>
      <label
        htmlFor="withdraw"
        className="flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/80 p-3 rounded-xl">
            <BiMoneyWithdraw size={20} />
          </div>
          <p className="text-sm md:text-base">Penarikan Dana</p>
        </div>
        <div className="text-blue-500 font-bold">{">"}</div>
      </label>

      <input type="checkbox" id="withdraw" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold mb-4">Penarikan Dana</h3>

          <div className="card bg-blue-600 text-white shadow-xl">
            <div className="card-body text-center">
              <span className="font-medium text-2xl -mb-3">Rp 30.000</span>
              <span className="text-xs">Saldo Rekening</span>
            </div>
          </div>

          <p className="my-6 text-sm">Nomor Ponsel 081379892969</p>

          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="bank" className="text-sm">
                Silahkan Pilih Rekening Bank
              </label>
              <select
                name="bank"
                id="bank"
                className="select select-bordered w-full"
                required
              >
                <option>BANK 1</option>
                <option>BANK 2</option>
                <option>BANK 3</option>
              </select>
            </div>

            <div>
              <label htmlFor="totalWithdraw" className="text-sm">
                Jumlah Penarikan
              </label>
              <input
                required
                type="number"
                name="totalWithdraw"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label htmlFor="passwordWithdraw" className="text-sm">
                Kata Sandi Penarikan
              </label>
              <input
                required
                type="password"
                name="passwordWithdraw"
                className="input input-bordered w-full"
              />
            </div>

            <span>BIAYA PENANGANAN : RP 0 (0%)</span>

            <div className="modal-action">
              <label className="btn btn-warning" htmlFor="withdraw">
                Close
              </label>
              <FormButton text="Kirimkan" icon={<IoIosSend size={25} />} />
            </div>
          </form>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor="withdraw"
        ></label>
      </div>
    </>
  );
}
