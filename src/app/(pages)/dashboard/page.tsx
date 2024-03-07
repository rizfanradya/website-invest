import DashboardCarousel from "./carousel";
import UserInfo from "./userInfo";
import RegisterArea from "./registerArea";
import prisma from "@/utils/prisma";
import { getServerSession } from "next-auth";
import UserIncomeNotify from "./userIncomeNotify";
import Partner from "./partner";
import { redirect } from "next/navigation";
import UserLayout from "@/app/components/userLayout";

export default async function Dashboard() {
  const session: any = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  const userInfo = await prisma.user.findUnique({
    where: { id: session.user.name! },
  });

  return (
    <UserLayout activeLink="dashboard">
      <title>Blibli71 - Dashboard</title>
      <DashboardCarousel />
      <UserInfo doc={userInfo} />
      <RegisterArea />
      <UserIncomeNotify />
      <Partner />
    </UserLayout>
  );
}
