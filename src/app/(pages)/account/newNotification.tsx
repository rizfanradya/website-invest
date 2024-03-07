import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function NewNotification() {
  return (
    <>
      <label
        htmlFor="newNotification"
        className="flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/80 p-3 rounded-xl">
            <FaBell size={20} />
          </div>
          <p className="text-sm md:text-base">Pemberitahuan Baru</p>
        </div>
        <div className="text-blue-500 font-bold">{">"}</div>
      </label>

      <input type="checkbox" id="newNotification" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold mb-4">Pemberitahuan Baru</h3>

          <p>Tidak ada notifikasi</p>

          <div className="modal-action">
            <label className="btn btn-warning" htmlFor="newNotification">
              Close
            </label>
          </div>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor="newNotification"
        ></label>
      </div>
    </>
  );
}
