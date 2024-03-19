 
import Image from "next/image";
import Countdown from "./countdown";

export default function partner2() {
  return (
    <>
     <label
  htmlFor="partner2"
  className="flex items-center justify-between cursor-pointer"
>
      <Image 
      src="/partner/2.png" 
      alt="2.png" 
      width={60} 
      height={60} 
      />
 
</label>


      <input type="checkbox" id="partner2" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white text-black">
          <h3 className="text-lg font-bold mb-4">Jordan</h3>
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
              <Countdown />

              </div>
              </div>
              <br></br>
          <div className="grid grid-cols-2 gap-2">
  {["jordan1.png", "jordan2.png", "jordan3.png", "jordan4.png" , "jordan5.png" , "jordan6.png"].map((imageName, index) => (
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
            <label className="btn btn-warning" htmlFor="partner2">
              Close
            </label>
          </div>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor="partner2"
        ></label>
      </div>
    </>
  );
}
