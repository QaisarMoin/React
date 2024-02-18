import React, { forwardRef, useId } from "react";

//forwardRef ka use hai input yaha hai nad access input ke andar ke text ka dusri file mein chiyea hai
const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          className=" inline-block mb-1 
      pl-1" // id ka use kuch nahi hai bas aese he bas input se link karne ke liye hai
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
      ></input>
    </div>
  );
});

export default Input;
