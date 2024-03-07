import UserLayout from "@/app/components/userLayout";
import { PiHandTapFill } from "react-icons/pi";
import GrabOrderUserIncomeNotifyCarousel from "./userIncomeNotifyCarousel";
import Topup from "@/app/components/topup";

export default function GrabOrder() {
  return (
    <UserLayout>
      <title>Blibli71 - Grab Order</title>
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <span className="md:text-4xl text-xl font-medium">Rp 30.000</span>
          <span className="text-xs">Saldo Rekening</span>
        </div>
        <Topup />
      </div>

      <div className="card bg-info text-white shadow-xl">
        <div className="card-body">
          <span className="md:text-4xl text-2xl font-medium">VIP 1</span>
          <div className="flex flex-col">
            <span className="font-medium md:text-2xl text-xl">
              Saldo Minimal Rp 30.000
            </span>
            <span className="text-xs md:text-base">Komisi 20%</span>
          </div>
          <div className="md:text-4xl text-2xl text-center">
            <span className="text-error font-semibold">0</span>
            /20
          </div>
        </div>
      </div>

      <div className="card bg-base-300 mt-4 text-white shadow-lg">
        <div className="card-body px-0">
          <div className="grid grid-cols-3 text-center text-xs sm:text-base">
            <div>
              <div className="text-green-600">Rp 0</div>
              <div className="text-slate-500">Komisi</div>
            </div>
            <div className="border-x border-slate-500">
              <div className="text-yellow-500">Rp 0</div>
              <div className="text-slate-500">Saldo Beku</div>
            </div>
            <div>
              <div className="text-red-500">Rp 0</div>
              <div className="text-slate-500 text-[10px] sm:text-base">
                Pendanaan Tugas
              </div>
            </div>
          </div>
          <button className="btn btn-info rounded-full mx-4 mt-4">
            <PiHandTapFill size={25} />
            AMBIL PESANAN
          </button>
        </div>
      </div>

      <GrabOrderUserIncomeNotifyCarousel />

      <div className="text-xs md:text-sm my-4">
        When you click to place an order, the mall will automatically execute
        the ordering task. You need to complete the application. Each commission
        will be automatically added after the order is completed. Complete the
        order task as soon as possible after receiving the order. If you have
        any questions, please contact your teacher.
      </div>
    </UserLayout>
  );
}
