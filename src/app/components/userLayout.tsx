import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaFileInvoice, FaHome, FaUserAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

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

export default async function UserLayout({
  children,
  activeLink,
}: {
  children: ReactNode;
  activeLink?: string;
}) {
  const session: any = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <div className="navbar bg-white fixed p-4 z-10">
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
            <div className="modal-box w-11/12 max-w-5xl bg-white text-black">
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-lg text-center mb-4 font-normal">
                  Silahkan Pilih Bahasa
                </h3>

                <div className="w-full">
                  <div className="flex items-center gap-2 border py-2 px-4 cursor-pointer rounded-xl">
                    <Image
                      src={"/lang.png"}
                      alt="lang"
                      width={25}
                      height={25}
                    />
                    <p>Bahasa Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <label className="modal-backdrop" htmlFor="langpopup"></label>
          </div>
        </div>
      </div>

      <div className="w-full fixed bottom-0 pb-1 flex items-center justify-center z-10">
        <ul className="menu menu-horizontal bg-white rounded-box flex items-center justify-center gap-6 relative shadow-xl">
          {navLink.map((doc, index) => (
            <li key={index} className="order-1">
              <Link
                href={doc.path}
                className={`tooltip ${
                  activeLink === doc.linkActive ? "text-blue-600" : ""
                }`}
                data-tip={doc.name}
              >
                {doc.icon}
              </Link>
            </li>
          ))}

          <li className="absolute -top-6 bg-white rounded-full order-2">
            <Link href={"/grabOrder"}>
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

      <div className="px-4 py-20">{children}</div>
    </>
  );
}
