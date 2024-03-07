import { PiNotebookFill } from "react-icons/pi";

export default function WithdrawList() {
  return (
    <>
      <label
        htmlFor="withdrawList"
        className="flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/80 p-3 rounded-xl">
            <PiNotebookFill size={20} />
          </div>
          <p className="text-sm md:text-base">Catatan Penarikan</p>
        </div>
        <div className="text-blue-500 font-bold">{">"}</div>
      </label>

      <input type="checkbox" id="withdrawList" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold mb-4">Catatan Penarikan</h3>

          <p>Tidak ada catatan</p>

          <div className="modal-action">
            <label className="btn btn-warning" htmlFor="withdrawList">
              Close
            </label>
          </div>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor="withdrawList"
        ></label>
      </div>
    </>
  );
}
