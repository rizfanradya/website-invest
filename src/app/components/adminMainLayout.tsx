import prisma from "@/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import AdminLogout from "./adminLogout";

const linkItems = [
  { name: "Dashboard", path: "", icon: <FaHome size={20} /> },
  {
    name: "User Management",
    path: "userManagement",
    icon: <FaUserAlt size={20} />,
  },
];

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session: any = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  const user = await prisma.user.findUnique({
    where: { id: session.user.name },
  });
  if (user?.role === "user") {
    redirect("/");
  }

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
          <div className="p-4">{children}</div>
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

            {linkItems.map((doc) => (
              <li key={doc.path}>
                <Link href={`/admin/${doc.path}`} className="text-slate-600">
                  {doc.icon}
                  {doc.name}
                </Link>
              </li>
            ))}

            <AdminLogout />
          </ul>
        </div>
      </div>
    </>
  );
}
