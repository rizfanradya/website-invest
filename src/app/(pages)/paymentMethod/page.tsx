import UserLayout from "@/app/components/userLayout";
import CreateNewPaymentMethod from "./create";
import UpdatePaymentMethod from "./update";
import DeletePaymentMethod from "./delete";

export default function PaymentMethod() {
  return (
    <UserLayout>
      <title>Blibli71 - Informasi Penarikan</title>
      <CreateNewPaymentMethod />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card bg-white">
          <div className="card-body p-4">
            <div className="text-sm flex gap-2">
              <div className="flex flex-col">
                <span>Jenis Nomor Kartu</span>
                <span>Nama Akun</span>
                <span>Nomor Rekening</span>
                <span className="text-xs">Cadangan Nomor Ponsel</span>
              </div>
              <div className="flex flex-col">
                <span>: BANK</span>
                <span>: Admin</span>
                <span>: 23432****45355</span>
                <span>: 0813****8787</span>
              </div>
            </div>

            <div className="grid grid-cols-2 items-center gap-3">
              <UpdatePaymentMethod doc={{ id: 1 }} />
              <DeletePaymentMethod doc={{ id: 1 }} />
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
