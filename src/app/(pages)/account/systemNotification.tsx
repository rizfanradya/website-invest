import Link from "next/link";
import { MdNotificationImportant, MdOutlineEmail } from "react-icons/md";

export default function SystemNotification() {
  return (
    <>
      <label
        htmlFor="systemNotification"
        className="flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/80 p-3 rounded-xl">
            <MdNotificationImportant size={20} />
          </div>
          <p className="text-sm md:text-base">Pemberitahuan Sistem</p>
        </div>
        <div className="text-blue-500 font-bold">{">"}</div>
      </label>

      <input type="checkbox" id="systemNotification" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white text-black">
          <h3 className="text-lg font-bold mb-4">Pemberitahuan Sistem</h3>

          <div className="card bg-blue-600 shadow-xl">
            <div className="card-body p-4 text-white">
              <div className="flex justify-between items-center">
                <MdOutlineEmail size={35} className="text-red-500" />
                <Link
                  href={"/account"}
                  className="link text-warning text-sm font-semibold"
                >
                  Show Detail
                </Link>
              </div>
              <span className="text-xs font-light">2024-03-07 17:40:21</span>
              <span className="text-sm">
                Pesanan O1765688933850587138 berhasil diambil.
              </span>
            </div>
          </div>

          <div className="modal-action">
            <label className="btn btn-warning" htmlFor="systemNotification">
              Close
            </label>
          </div>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor="systemNotification"
        ></label>
      </div>
    </>
  );
}
