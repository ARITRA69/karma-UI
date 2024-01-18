// Input.tsx
import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className }) => {
  const defaultClasses = "border-b p-2 rounded outline-none";

  const mergedClasses = twMerge([defaultClasses, className]);

  return <input className={mergedClasses} />;
};

export default Input;
