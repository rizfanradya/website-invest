import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="navbar bg-white px-4 md:px-10">
        <div className="navbar-start">
          <Link href={"/admin"}>
            <Image src={"/logo.png"} alt="logo" width={70} height={70} />
          </Link>
        </div>
        <div className="navbar-end">
          <label
            htmlFor="my-drawer"
            className="drawer-button cursor-pointer text-black"
          >
            <IoMenu size={30} />
          </label>
        </div>
      </div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="px-4">{children}</div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 max-w-xs w-full min-h-full bg-white text-black">
            <div className="flex justify-between mb-6">
              <Link href={"/admin"}>
                <Image src={"/logo.png"} alt="logo" width={70} height={70} />
              </Link>
              <label
                htmlFor="my-drawer"
                className="drawer-button cursor-pointer text-black"
              >
                <MdClose size={30} />
              </label>
            </div>

            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
