"use client";
import { useFormStatus } from "react-dom";

export default function FormButton({
  text,
  color,
  icon,
}: {
  text: string;
  color?: string;
  icon?: any;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <div className={`btn ${color ? color : "btn-success"}`}>
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <button className={`btn ${color ? color : "btn-success"}`}>
          {icon && icon}
          {text}
        </button>
      )}
    </>
  );
}
