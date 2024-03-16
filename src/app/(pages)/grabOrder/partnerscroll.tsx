import Image from "next/image";

const dataPartner = [
  { image: "/partner/1.png" },
  { image: "/partner/2.png" },
  { image: "/partner/3.png"},
  { image: "/partner/4.png"},
  { image: "/partner/5.png"},
  { image: "/partner/6.jpg"},
];

export default function PartnerScroll() {
  return (
    <div className="mb-24 mt-8">
 
      <div className="overflow-x-auto">
        <div className="flex flex-nowrap space-x-4 p-2">
          {dataPartner.map((doc, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <div className="relative h-10 w-48 h-32">
                <Image
                  src={doc.image}
                  alt={doc.image}
                  width={100}
                  height={90} 
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}