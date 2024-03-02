import PageRouteSecure from "@/app/components/pageRouteSecure";
import Navbar from "./navbar";
import DashboardCarousel from "./carousel";
import UserInfo from "./userInfo";
import RegisterArea from "./registerArea";
import prisma from "@/utils/prisma";
import { getServerSession } from "next-auth";
import UserIncomeNotify from "./userIncomeNotify";
import Partner from "./partner";
import Menu from "./menu";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { user } = await getServerSession();
  if (!user) {
    redirect("/login");
  }

  const userInfo = await prisma.user.findUnique({ where: { id: user.name } });

  return (
    <PageRouteSecure>
      <title>Blibli71 - Dashboard</title>
      <Navbar />
      <div className="px-4">
        <DashboardCarousel />
        <UserInfo doc={userInfo} />
        <RegisterArea />
        <UserIncomeNotify />
        <Partner />
      </div>
      <Menu />
    </PageRouteSecure>
  );
}
