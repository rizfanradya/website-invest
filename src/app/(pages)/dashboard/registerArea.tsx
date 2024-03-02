const dataRegisterArea = [
  {
    name: "VIP1",
    level: "Level saat ini",
    balance: 10000000,
    commissionRates: 20,
    orderQuantity: 20,
    minimumBalance: 30000,
  },
  {
    name: "VIP2",
    level: "Bergabung",
    balance: 20000000,
    commissionRates: 22,
    orderQuantity: 50,
    minimumBalance: 50000,
  },
  {
    name: "VIP3",
    level: "Bergabung",
    balance: 50000000,
    commissionRates: 24,
    orderQuantity: 100,
    minimumBalance: 100000,
  },
];

export default function RegisterArea() {
  return (
    <div className="mt-8">
      <h1 className="font-semibold text-xl">Register Area</h1>

      {dataRegisterArea.map((doc, index) => (
        <div
          key={index}
          className="card bg-sky-600 text-white shadow-lg mt-4"
        >
          <div className="card-body">
            <div className="font-medium mb-4 text-2xl flex justify-between items-center">
              <div>{doc.name}</div>
              <div>{doc.level}</div>
            </div>
            <div className="text-white/70">
              <p>Rp {doc.balance.toLocaleString("id-ID")}</p>
              <p>Tarif komisi: {doc.commissionRates}%</p>
              <p>Jumlah pesanan: {doc.orderQuantity}/Langit</p>
              <p>
                Saldo Minimal Rp {doc.minimumBalance.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
