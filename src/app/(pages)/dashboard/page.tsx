import PageRouteSecure from "@/app/components/pageRouteSecure";
import Image from "next/image";
import Link from "next/link";
import { RiMenu2Fill } from "react-icons/ri";

export default function Dashboard() {
  return (
    <PageRouteSecure>
      <div className="navbar bg-base-100 fixed p-6">
        <div className="navbar-start">
          <Link href={"/"} className="btn btn-ghost text-xl">
            <Image src={"logo.svg"} alt="logo" width={50} height={50} />
          </Link>
        </div>

        <div className="navbar-end">
          <div className="btn">Button</div>
        </div>
      </div>
    </PageRouteSecure>
  );
}
