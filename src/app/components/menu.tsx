import Image from "next/image";
import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import { FaFileInvoice, FaHome, FaUserAlt } from "react-icons/fa";

const navLink = [
  {
    path: "/",
    name: "Dashboard",
    linkActive: "dashboard",
    icon: <FaHome size={25} />,
  },
  {
    path: "/orderList",
    name: "Pesanan",
    linkActive: "order",
    icon: <FaFileInvoice size={25} />,
  },
  {
    path: "/customerService",
    name: "Pelayanan Pelanggan",
    linkActive: "customerService",
    icon: <AiFillMessage size={25} />,
  },
  {
    path: "/account",
    name: "Akun",
    linkActive: "account",
    icon: <FaUserAlt size={25} />,
  },
];

export default function Menu({ active }: { active: string }) {
  return (
    <div className="w-full fixed bottom-0 pb-1 flex items-center justify-center z-10">
      <ul className="menu menu-horizontal bg-base-300 rounded-box flex items-center justify-center gap-6 relative shadow-xl">
        {navLink.map((doc, index) => (
          <li key={index} className="order-1">
            <Link
              href={doc.path}
              className={`tooltip ${
                active === doc.linkActive ? "text-blue-600" : ""
              }`}
              data-tip={doc.name}
            >
              {doc.icon}
            </Link>
          </li>
        ))}

        <li className="absolute -top-6 bg-base-300 rounded-full order-2">
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
      </ul>
    </div>
  );
}
