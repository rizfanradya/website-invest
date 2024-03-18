import Link from "next/link";
import { MdNotificationImportant, MdOutlineEmail } from "react-icons/md";
import Image from "next/image";


export default function partner2() {
  return (
    <>
     <label
  htmlFor="partner3"
  className="flex items-center justify-between cursor-pointer"
>
      <Image 
      src="/partner/3.png" 
      alt="3.png" 
      width={60} 
      height={60} 
      />
 
</label>


      <input type="checkbox" id="partner3" className="modal-toggle" />
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
            <label className="btn btn-warning" htmlFor="partner3">
              Close
            </label>
          </div>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor="partner3"
        ></label>
      </div>
    </>
  );
}
