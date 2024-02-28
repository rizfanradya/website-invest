"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaKey, FaUserAlt } from "react-icons/fa";

type inputs = {
  username: string;
  password: string;
};

export default function FormLogin() {
  const { register, handleSubmit } = useForm<inputs>();
  const [buttonSubmit, setButtonSubmit] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <form className="text-start w-full mt-8 flex flex-col gap-4">
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

      <div className="flex flex-col items-center justify-center gap-4 mt-4">
        {buttonSubmit ? (
          <div className="btn btn-primary rounded-2xl text-white w-full">
            <span className="loading loading-spinner"></span>
          </div>
        ) : (
          <button className="btn btn-primary rounded-2xl text-white w-full">
            Login
          </button>
        )}
      </div>
    </form>
  );
}
