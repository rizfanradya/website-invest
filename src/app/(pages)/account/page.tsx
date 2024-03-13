import UserInfo from "./userInfo";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prisma from "@/utils/db";
import MenuSetting from "./menuSetting";
import UserLayout from "@/app/components/userLayout";

export default async function Account() {
  const session: any = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  const userInfo: any = await prisma.user.findUnique({
    where: { id: session.user.name! },
  });

  return (
    <UserLayout activeLink="account">
      <title>Blibli71 - Account</title>
      <UserInfo doc={userInfo} />
      <MenuSetting />
    </UserLayout>
  );
}
