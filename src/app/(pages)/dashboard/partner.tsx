import Image from "next/image";

const dataPartner = [
  { image: "/partner/1.png" },
  { image: "/partner/2.png" },
  { image: "/partner/3.png" },
  { image: "/partner/4.png" },
  { image: "/partner/5.png" },
  { image: "/partner/6.png" },
];

export default function Partner() {
  return (
    <div className="mb-24">
      <h1 className="font-semibold md:text-xl mb-4">Mitra</h1>

      <div className="grid grid-cols-3 gap-4">
        {dataPartner.map((doc, index) => (
          <Image
            src={doc.image}
            alt={doc.image}
            width={500}
            height={500}
            key={index}
            className="h-full rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
}
