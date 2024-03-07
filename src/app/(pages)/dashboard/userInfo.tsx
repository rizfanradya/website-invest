export default async function UserInfo({ doc }: any) {
  return (
    <div className="card bg-base-300 shadow-lg">
      <div className="card-body">
        <div className="flex justify-between text-sm md:text-basex">
          <p>{doc.noHp}</p>
          <p>216300</p>
        </div>

        <p className="text-sm md:text-base">Saldo rekening</p>
        <p className="font-semibold md:text-2xl">
          Rp {doc.balance.toLocaleString("id-ID")}
        </p>

        <div className="grid grid-cols-2 text-xs md:text-base">
          <div>
            <p>Penghasilan hari ini</p>
            <p>Rp {doc.todayIncome.toLocaleString("id-ID")}</p>
          </div>

          <div>
            <p>Penghasilan kemarin</p>
            <p>Rp {doc.yesterdayIncome.toLocaleString("id-ID")}</p>
          </div>

          <div>
            <p>Penghasilan Kumulatif</p>
            <p>Rp {doc.cumulativeIncome.toLocaleString("id-ID")}</p>
          </div>

          <div>
            <p>Manfaat tim</p>
            <p>Rp {doc.teamBenefit.toLocaleString("id-ID")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
