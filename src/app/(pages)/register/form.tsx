"use client";
import { allowConsoleLog } from "@/utils/constant";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSolidDiscount } from "react-icons/bi";
import { FaKey, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";

type inputs = {
  username: string;
  email: string;
  password: string;
  referral: string;
};

export default function FormRegister() {
  const { register, handleSubmit } = useForm<inputs>();
  const [buttonSubmit, setButtonSubmit] = useState(false);
  const router = useRouter();

  async function onSubmit(e: inputs) {
    try {
      setButtonSubmit(true);
      const { data } = await axios.post("/api/user/create", e);
      if (data.status === false) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message,
          allowOutsideClick: false,
        });
      } else {
        router.push("/login");
      }
      setButtonSubmit(false);
    } catch (error: any) {
      allowConsoleLog && console.log(error);
      setButtonSubmit(false);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
        allowOutsideClick: false,
      });
    }
  }

  return (
    <form
      className="text-start w-full mt-8 flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="Username" className="label-text">
          Username
        </label>
        <div className="flex items-center justify-between input input-bordered rounded-2xl">
          <input
            id="Username"
            type="text"
            placeholder="Username"
            className="w-full"
            required
            {...register("username", { required: true })}
          />
          <FaUserAlt size={"1.5em"} className="text-slate-500" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="Email" className="label-text">
          Email
        </label>
        <div className="flex items-center justify-between input input-bordered rounded-2xl">
          <input
            id="Email"
            type="email"
            placeholder="Email"
            className="w-full"
            required
            {...register("email", { required: true })}
          />
          <MdEmail size={"1.5em"} className="text-slate-500" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="Password" className="label-text">
          Password
        </label>
        <div className="flex items-center justify-between input input-bordered rounded-2xl">
          <input
            id="Password"
            type="password"
            placeholder="Password"
            className="w-full"
            required
            {...register("password", { required: true })}
          />
          <FaKey size={"1.5em"} className="text-slate-500" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="Kode Referral" className="label-text">
          Kode Referral
        </label>
        <div className="flex items-center justify-between input input-bordered rounded-2xl">
          <input
            id="Kode Referral"
            placeholder="Kode Referral"
            type="text"
            className="w-full"
            required
            {...register("referral", { required: true })}
          />
          <BiSolidDiscount size={"1.5em"} className="text-slate-500" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-4">
        {buttonSubmit ? (
          <div className="btn btn-primary rounded-2xl text-white w-full">
            <span className="loading loading-spinner"></span>
          </div>
        ) : (
          <button className="btn btn-primary rounded-2xl text-white w-full">
            Regiter
          </button>
        )}
      </div>
    </form>
  );
}
