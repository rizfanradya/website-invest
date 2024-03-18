import UserLayout from "@/app/components/userLayout";
import Partner1 from "./partner1";
import Partner2 from "./partner2";
import Partner3 from "./partner3";

import Topup from "@/app/components/topup";
import Image from "next/image";

const dataPartnerBawah = [
  { image: "1.png"},
  { image: "2.png"},
  { image: "3.png"},
  { image: "4.png"},
  { image: "5.png" },
  { image: "6.jpg" }, 
];

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

      <div className="max-h-96 overflow-hidden rounded-xl">
        <Image
          src={"/banner.png"}
          alt="banner"
          width={100}
          height={100}
          className="w-full"
        />

      </div>

      <div className="my-8 flex gap-4 overflow-x-auto">
        <Partner1 />
        <Partner2 />
        <Partner3 />
      </div>


      <div className="my-8">
        <h1 className="font-semibold md:text-xl mb-4 text-black">
          Paling Populer
        </h1>

        <div className="grid grid-cols-2 gap-2">
          {dataPartnerBawah.map((doc, index) => (
            <div className="h-20 sm:h-60 md:h-78 lg:h-30" key={index}>
              <Image
                src={`/partner/${doc.image}`}
                alt={doc.image}
                width={500}
                height={500}
                className="rounded-xl m-auto h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="card bg-white mt-4 text-white shadow-lg">
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
      </div> */}
    </UserLayout>
  );
}
