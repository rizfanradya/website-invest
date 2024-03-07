import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "./navbar";
import Menu from "./menu";

export default async function UserLayout({
  children,
  activeLink,
}: {
  children: ReactNode;
  activeLink: string;
}) {
  const session: any = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      <Menu active={activeLink} />
      <div className="px-4 py-20">{children}</div>
    </>
  );
}
