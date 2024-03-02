import Logout from "@/app/components/logout";
import Link from "next/link";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaBell, FaInfoCircle, FaThList } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { PiNotebookFill } from "react-icons/pi";
import { RiRefreshFill } from "react-icons/ri";

const menuLink = [
  {
    path: "/account",
    icon: <BiMoneyWithdraw size={25} />,
    name: "Penarikan Dana",
  },
  {
    path: "/account",
    icon: <PiNotebookFill size={25} />,
    name: "Catatan Penarikan",
  },
  {
    path: "/account",
    icon: <FaThList size={25} />,
    name: "Memuat Ulang Rekaman",
  },
  {
    path: "/account",
    icon: <RiRefreshFill size={25} />,
    name: "Catatan Perubahan Akun",
  },
  {
    path: "/account",
    icon: <FaInfoCircle size={25} />,
    name: "Informasi Penarikan",
  },
  {
    path: "/account",
    icon: <FaBell size={25} />,
    name: "Pengumuman",
  },
  {
    path: "/account",
    icon: <FaUnlockKeyhole size={25} />,
    name: "Kelola Kata Sandi",
  },
];

export default function MenuSetting() {
  return (
    <div className="card bg-base-300 mt-6 text-white shadow-lg">
      <div className="card-body">
        <div className="flex flex-col gap-4">
          {menuLink.map((doc, index) => (
            <Link
              key={index}
              href={doc.path}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/80 p-3 rounded-xl">{doc.icon}</div>
                <p>{doc.name}</p>
              </div>
              <div className="text-blue-500 font-bold text-lg">{">"}</div>
            </Link>
          ))}

          <Logout />
        </div>
      </div>
    </div>
  );
}
