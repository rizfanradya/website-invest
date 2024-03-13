import UserLayout from "@/app/components/userLayout";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa6";

export default function CustomerService() {
  return (
    <UserLayout activeLink="customerService">
      <title>Blibli71 - Pelayanan Pelanggan</title>
      <div className="card bg-sky-600 text-white shadow-lg mb-6">
        <div className="card-body text-center md:text-2xl font-semibold py-12">
          <h1>Layanan Pelanggan Yang Berdedikasi</h1>
        </div>
      </div>

      <div className="card shadow-lg bg-white">
        <div className="card-body grid gap-6 text-xs md:text-base">
          <p>
            pemberitahuan kepada seluruh pengguna,Waktu penyelesaian pesanan
            adalah 2 jam.
          </p>
          <p>
            Selesaikan pesanan dengan batas waktu yang di tentukan,jika tidak
            akan anda mengalami pembekuan saldo.
          </p>
          <p>
            Isi ulang dan penarikan saldo anda diluar jam 09:00 WIB – 21:00 WIB
            harus ada izin dari Customer Service kami. Apabila terjadi masalah
            dalam transaksi Anda, segara untuk menghubungi Customer Service
            kami.
          </p>

          <Link
            href={"https://web.telegram.org/"}
            target="blank"
            className="m-auto text-center"
          >
            <FaTelegram size={50} className="text-info m-auto" />
            <p>Service</p>
            <p>08:00 - 22:00</p>
            <p>Telegram : xxxxxxxx</p>
          </Link>
        </div>
      </div>
    </UserLayout>
  );
}
