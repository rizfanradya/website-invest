

import Image from "next/image";

const dataPartner = [
  { image: "/partner/1.png"},
  { image: "/partner/2.png"},
  { image: "/partner/3.png"},
  { image: "/partner/4.png"},
  { image: "/partner/5.png"},
  { image: "/partner/6.jpg"},
];

export default function Partner() {
  return (
    <div className="mb-24 mt-8">
      <h1 className="font-semibold md:text-xl mb-4 text-black">Paling Populer</h1>

      <div className="grid grid-cols-2 gap-3">
        {dataPartner.map((doc, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-3">
            <div className="relative h-20 sm:h-60 md:h-78 lg:h-30">
              <Image
                src={doc.image}
                alt={doc.image}
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
