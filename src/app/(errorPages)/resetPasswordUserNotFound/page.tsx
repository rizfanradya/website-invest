"use client";
import { allowConsoleLog } from "@/utils/constant";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function ResetPasswordUserNotFound() {
  const router = useRouter();
  const showAlert = async () => {
    try {
      const result = await Swal.fire({
        icon: "error",
        title: "Error",
        text: "User Not Found",
        showCancelButton: false,
        confirmButtonText: "OK",
        allowOutsideClick: false,
      });

      if (result.isConfirmed) {
        router.push("/resetPassword");
      }
    } catch (error) {
      allowConsoleLog && console.log(error);
      router.push("/resetPassword");
    }
  };
  showAlert();
  return <title>Blibli - User Not Found</title>;
}
