"use client";
import { allowConsoleLog } from "@/utils/constant";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function RegisterUserAlreadyExist() {
  const router = useRouter();
  const showAlert = async () => {
    try {
      const result = await Swal.fire({
        icon: "error",
        title: "Error",
        text: "User Already Exist",
        showCancelButton: false,
        confirmButtonText: "OK",
        allowOutsideClick: false,
      });

      if (result.isConfirmed) {
        router.push("/login");
      }
    } catch (error) {
      allowConsoleLog && console.log(error);
      router.push("/login");
    }
  };
  showAlert();
  return <title>Blibli - User Already Exist</title>;
}
