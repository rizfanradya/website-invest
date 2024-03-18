import { RiRefreshFill } from "react-icons/ri";

export default function BillList() {
  return (
    <>
      <label
        htmlFor="billList"
        className="flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/80 p-3 rounded-xl">
            <RiRefreshFill size={20} />
          </div>
          <p className="text-sm md:text-base">Catatan Perubahan Akun</p>
        </div>
        <div className="text-blue-500 font-bold">{">"}</div>
      </label>

      <input type="checkbox" id="billList" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white">
          <h3 className="text-lg font-bold mb-4">Catatan Perubahan Akun</h3>

          <div className="card shadow-xl bg-blue-600">
            <div className="card-body px-4 grid md:grid-cols-2 text-white">
              <div className="flex flex-col">
                <span className="font-light text-xs -mb-1 text-slate-300">
                  Jenis Perubahan Akun
                </span>
                <span className="text-error font-semibold">
                  Mendaftar Hadiah
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-light text-xs -mb-1 text-slate-300">
                  Jumlah Sebelumnya
                </span>
                <span className="font-semibold">0</span>
              </div>

                <div className="flex flex-col">
                  <span className="font-light text-xs -mb-1 text-slate-300">
                    Jumlah Perubahan Akun
                  </span>
                  <span className="font-semibold text-error">Rp 30.000</span>
                </div>

              <div className="flex flex-col">
                <span className="font-light text-xs -mb-1 text-slate-300">
                  Jumlah Setelah Perubahan Akun
                </span>
                <span className="font-semibold">Rp 30.000</span>
              </div>

              <div className="flex flex-col">
                <span className="font-light text-xs -mb-1 text-slate-300">
                  Waktu Ganti Akun
                </span>
                <span className="font-semibold">2024-02-29 20:09:49</span>
              </div>
            </div>
          </div>

          <div className="modal-action">
            <label className="btn btn-warning" htmlFor="billList">
              Close
            </label>
          </div>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor="billList"
        ></label>
      </div>
    </>
  );
}
