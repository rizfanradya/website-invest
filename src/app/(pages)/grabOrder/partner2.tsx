import Link from "next/link";
import { MdNotificationImportant, MdOutlineEmail } from "react-icons/md";
import Image from "next/image";


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
