"use client";
import { allowConsoleLog } from "@/utils/constant";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function RegisterDataNotValid() {
  const router = useRouter();
  const showAlert = async () => {
    try {
      const result = await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Data Not Valid",
        showCancelButton: false,
        confirmButtonText: "OK",
        allowOutsideClick: false,
      });

      if (result.isConfirmed) {
        router.push("/register");
      }
    } catch (error) {
      allowConsoleLog && console.log(error);
      router.push("/register");
    }
  };
  showAlert();
  return <title>Blibli - Data Not Valid</title>;
}
