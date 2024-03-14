"use client";
import { useFormStatus } from "react-dom";

export default function FormButton({
  text,
  color,
  icon,
  size,
  textColor,
}: {
  text: string;
  color?: string;
  icon?: any;
  size?: string;
  textColor?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <div
          className={`btn ${color ? color : "btn-success"} ${size && size} ${
            textColor && textColor
          }`}
        >
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <button
          className={`btn ${color ? color : "btn-success"} ${size && size} ${
            textColor && textColor
          }`}
        >
          {icon && icon}
          {text}
        </button>
      )}
    </>
  );
}
