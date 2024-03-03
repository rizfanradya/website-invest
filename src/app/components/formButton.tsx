"use client";
import { useFormStatus } from "react-dom";

export default function FormButton({
  text,
  color = "primary",
}: {
  text: string;
  color?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-4">
      {pending ? (
        <div className={`btn btn-${color} rounded-2xl text-white w-full`}>
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <button className={`btn btn-${color} rounded-2xl text-white w-full`}>
          {text}
        </button>
      )}
    </div>
  );
}
