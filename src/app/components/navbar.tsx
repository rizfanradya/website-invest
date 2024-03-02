import Logout from "@/app/components/logout";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed p-4 z-10">
      <div className="navbar-start">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="logo" width={70} height={70} />
        </Link>
      </div>

      <div className="navbar-end">
        <label htmlFor="langpopup" className="cursor-pointer">
          <Image src={"/lang.png"} alt="lang" width={30} height={30} />
        </label>

        <input type="checkbox" id="langpopup" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg text-center mb-4 font-normal">
                Silahkan Pilih Bahasa
              </h3>

              <div className="w-full">
                <div className="flex items-center gap-2 border py-2 px-4 cursor-pointer rounded-xl">
                  <Image src={"/lang.png"} alt="lang" width={25} height={25} />
                  <p>Bahasa Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <label className="modal-backdrop" htmlFor="langpopup"></label>
        </div>
      </div>
    </div>
  );
}
