import Topup from "@/app/components/topup";
import { FaUserAlt } from "react-icons/fa";

export default function UserInfo({
  doc,
}: {
  doc: { noHp: string; balance: number };
}) {
  return (
    <>
      <div className="card bg-sky-600 text-white shadow-lg">
        <div className="card-body">
          <div className="flex items-center gap-4">
            <FaUserAlt size={40} />
            <p className="md:text-2xl">
              {doc.noHp}{" "}
              <span className="text-slate-400">
                {doc.balance >= 30000
                  ? "VIP1"
                  : doc.balance >= 50000 && doc.balance <= 100000
                  ? "VIP2"
                  : doc.balance >= 100000
                  ? "VIP3"
                  : ""}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-base-300 mt-4 text-white shadow-lg">
        <div className="card-body">
          <div>
            <div className="border-b pb-4 border-slate-500 flex justify-between">
              <div>
                <div className="text-2xl md:text-4xl">
                  Rp {doc.balance.toLocaleString("id-ID")}
                </div>
                <div className="text-slate-400 text-xs md:text-base">
                  Saldo Rekening
                </div>
              </div>

              <Topup />
            </div>

            <div className="grid grid-cols-3 mt-4 sm:mt-6 text-center text-xs sm:text-base">
              <div>
                <div className="text-green-600">
                  Rp {doc.balance.toLocaleString("id-ID")}
                </div>
                <div className="text-slate-500">Saldo Efektif</div>
              </div>

              <div className="border-x border-slate-500">
                <div className="text-yellow-500">0</div>
                <div className="text-slate-500">Nilai Kredit</div>
              </div>

              <div>
                <div className="text-red-500">0</div>
                <div className="text-slate-500">Saldo Beku</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
