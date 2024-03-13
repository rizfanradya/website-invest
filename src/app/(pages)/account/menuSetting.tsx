import Logout from "@/app/components/logout";
import Link from "next/link";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaBell, FaInfoCircle, FaThList } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { PiNotebookFill } from "react-icons/pi";
import { RiRefreshFill } from "react-icons/ri";
import Withdraw from "./withdraw";
import WithdrawList from "./withdrawList";
import RechargeList from "./rechargeList";
import BillList from "./billList";
import ManageLoginPassword from "./manageLoginPassword";
import ManageWithdrawPassword from "./mangeWithdrawPassword";
import SystemNotification from "./systemNotification";
import NewNotification from "./newNotification";

const menuLink = [
  {
    path: "/paymentMethod",
    icon: <FaInfoCircle size={20} />,
    name: "Informasi Penarikan",
  },
];

export default function MenuSetting() {
  return (
    <div className="card bg-white mt-6">
      <div className="card-body">
        <div className="flex flex-col gap-4">
          <Withdraw />
          <WithdrawList />
          <RechargeList />
          <BillList />
          {menuLink.map((doc, index) => (
            <Link
              key={index}
              href={doc.path}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/80 p-3 rounded-xl">{doc.icon}</div>
                <p className="text-sm md:text-base">{doc.name}</p>
              </div>
              <div className="text-blue-500 font-bold">{">"}</div>
            </Link>
          ))}
          <NewNotification />
          <SystemNotification />
          <ManageLoginPassword />
          <ManageWithdrawPassword />

          <Logout />
        </div>
      </div>
    </div>
  );
}
