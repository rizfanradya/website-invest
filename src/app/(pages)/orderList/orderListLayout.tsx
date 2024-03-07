import UserLayout from "@/app/components/userLayout";
import Link from "next/link";
import { ReactNode } from "react";

const linkItems = [
  { name: "Semua", path: "" },
  {
    name: "Tinjauan Tertunda",
    path: "pendingReview",
  },
  { name: "Untuk Diserahkan", path: "forSubmit" },
  { name: "Diserahkan", path: "submitted" },
];

export default function OrderListLayout({
  children,
  activeLink,
}: {
  children: ReactNode;
  activeLink: string;
}) {
  return (
    <UserLayout activeLink="order">
      <title>Blibli71 - Pesanan</title>
      <div className="grid grid-cols-4 text-center">
        {linkItems.map((doc, index) => (
          <Link
            key={index}
            href={`/orderList/${doc.path}`}
            className={`border py-1 border-info text-xs md:text-base ${
              activeLink === doc.path && "bg-info text-white"
            }`}
          >
            {doc.name}
          </Link>
        ))}
      </div>
      {children}
    </UserLayout>
  );
}
