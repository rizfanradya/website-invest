import UserLayout from "@/app/components/userLayout";
import { PiHandTapFill } from "react-icons/pi";
import GrabOrderUserIncomeNotifyCarousel from "./userIncomeNotifyCarousel";
import Topup from "@/app/components/topup";
import Partner from "./partner";
import PartnerScroll from "./partnerscroll";
import Image from "next/image";

export default function GrabOrder() {
  return (
   <UserLayout>
      <title>Blibli71 - Grab Order</title>
      <div className="flex justify-between items-center mb-6 text-black">
        <div className="flex flex-col">
          <span className="md:text-4xl text-xl font-medium">Rp 30.000</span>
          <span className="text-xs">Saldo Rekening</span>
        </div>
        <Topup />
      </div> 
      <div className="card-body">
  <Image src={"/banner.png"} alt="banner" width={100} height={50} style={{ width: "100%" }} />
</div>
         <PartnerScroll />
          <Partner />
       <div className="card bg-white mt-4 text-white shadow-lg">
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

      <div className="text-xs md:text-sm my-4 text-black">
        When you click to place an order, the mall will automatically execute
        the ordering task. You need to complete the application. Each commission
        will be automatically added after the order is completed. Complete the
        order task as soon as possible after receiving the order. If you have
        any questions, please contact your teacher.
      </div>
    </UserLayout>
  );
}
