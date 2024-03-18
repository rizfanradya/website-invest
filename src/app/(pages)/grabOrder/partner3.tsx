 
import Image from "next/image";


export default function partner2() {
  return (
    <>
     <label
  htmlFor="partner3"
  className="flex items-center justify-between cursor-pointer"
>
      <Image 
      src="/partner/3.png" 
      alt="3.png" 
      width={60} 
      height={60} 
      />
 
</label>


      <input type="checkbox" id="partner3" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white text-black">
          <h3 className="text-lg font-bold mb-4">DIOR</h3>
          <div className="card shadow-xl bg-blue-600">
            <div className="card-body px-4 grid md:grid-cols-2 text-white"> 
               <div className="flex flex-col">
                <span className="font-light text-xs -mb-1 text-slate-300">
                  Nomor Tugas
                </span>
                <span className="text-warning font-semibold">
                  2403180348
                </span>
              </div>
              </div>
              </div>
              <br></br>
          <div className="grid grid-cols-2 gap-2">
  {["dior1.png", "dior2.png", "dior3.png", "dior4.png" , "dior5.png" , "dior6.png"].map((imageName, index) => (
    <Image
      key={index}
      src={`/partner/${imageName}`}
      alt={imageName}
      width={500}
      height={500}
      className="rounded-xl m-auto h-full"
    />
  ))}
</div>

<br></br>
<label>
<span className="text-sm font-semibold border border-gray-500 px-2 py-1 rounded" style={{ marginRight: '8px' }}>Mancanegara</span>
<span className="text-sm font-semibold border border-gray-500 px-2 py-1 rounded"style={{ marginRight: '8px' }}>Local</span>
<span className="text-sm font-semibold border border-gray-500 px-2 py-1 rounded"style={{ marginRight: '8px' }}>Import</span>
</label>

          <div className="modal-action">
            <label className="btn btn-warning" htmlFor="partner3">
              Close
            </label>
          </div>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor="partner3"
        ></label>
      </div>
    </>
  );
}
