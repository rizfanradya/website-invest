import { FaThList } from "react-icons/fa";

export default function RechargeList() {
  return (
    <>
      <label
        htmlFor="rechargeList"
        className="flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/80 p-3 rounded-xl">
            <FaThList size={20} />
          </div>
          <p className="text-sm md:text-base">Memuat Ulang Rekaman</p>
        </div>
        <div className="text-blue-500 font-bold">{">"}</div>
      </label>

      <input type="checkbox" id="rechargeList" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold mb-4">Memuat Ulang Rekaman</h3>

          <div className="card shadow-xl bg-blue-600">
            <div className="card-body px-4">
              <div className="flex text-xs md:text-base gap-2">
                <div className="flex flex-col">
                  <span>Jumlah</span>
                  <span>Waktu Aplikasi</span>
                  <span className="text-error font-semibold">Dibayar</span>
                </div>
                <div className="flex flex-col">
                  <span>: Rp 30.000</span>
                  <span>: 2024-02-29 20:09:49</span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-action">
            <label className="btn btn-warning" htmlFor="rechargeList">
              Close
            </label>
          </div>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor="rechargeList"
        ></label>
      </div>
    </>
  );
}
