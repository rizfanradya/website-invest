import Image from "next/image";
import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import { FaFileInvoice, FaHome, FaUserAlt } from "react-icons/fa";

export default function Menu() {
  return (
    <div className="w-full fixed bottom-0 pb-1 flex items-center justify-center">
      <ul className="menu menu-horizontal bg-base-300 rounded-box flex items-center justify-center gap-2 relative shadow-xl">
        <li>
          <Link href={"/"} className="tooltip" data-tip="Home">
            <FaHome size={25} />
          </Link>
        </li>
        <li className="mr-8">
          <Link href={"/"} className="tooltip" data-tip="Pesanan">
            <FaFileInvoice size={25} />
          </Link>
        </li>

        <li className="absolute -top-6 bg-base-300 rounded-full">
          <Link href={"/"}>
            <Image
              src={"/logoimg.png"}
              alt="logo"
              width={30}
              height={30}
              className="rounded-full"
            />
          </Link>
        </li>

        <li className="ml-8">
          <Link href={"/"} className="tooltip" data-tip="Pelayanan Pelanggan">
            <AiFillMessage size={25} />
          </Link>
        </li>
        <li>
          <Link href={"/"} className="tooltip" data-tip="Akun">
            <FaUserAlt size={25} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
