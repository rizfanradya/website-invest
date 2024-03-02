import Menu from "@/app/components/menu";
import Navbar from "@/app/components/navbar";
import PageRouteSecure from "@/app/components/pageRouteSecure";
import UserInfo from "./userInfo";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prisma from "@/utils/prisma";
import MenuSetting from "./menuSetting";

export default async function Account() {
  const session: any = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  const userInfo: any = await prisma.user.findUnique({
    where: { id: session.user.name! },
  });

  return (
    <PageRouteSecure>
      <title>Blibli71 - Account</title>
      <Navbar />
      <div className="px-4 py-24">
        <UserInfo doc={userInfo} />
        <MenuSetting />
      </div>
      <Menu active="account" />
    </PageRouteSecure>
  );
}
