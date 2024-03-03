"use client";
import { allowConsoleLog } from "@/utils/constant";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function RegisterDataCannotBeEmpty() {
  const router = useRouter();
  const showAlert = async () => {
    try {
      const result = await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Data Cannot Be Empty",
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
  return <title>Blibli - Data Cannot Be Empty</title>;
}
