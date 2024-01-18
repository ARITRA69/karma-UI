// Button.tsx
import React, { ReactNode, ButtonHTMLAttributes } from "react";
import cn from "classnames";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  ...rest
}) => {
  const defaultClasses = "dark:invert py-2 px-4 rounded";
  const variantClasses = {
    primary: "bg-black text-white",
    outline: "border-black text-white",
  };

  const mergedClasses = twMerge([
    defaultClasses,
    variant && variantClasses[variant],
    className,
  ]);

  return (
    <button className={mergedClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
