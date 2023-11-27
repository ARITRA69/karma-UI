import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className={`${props.className} rounded-md px-4 py-2 hover:backdrop-opacity-80 bg-black text-white`}
    >
      {props.children}
    </button>
  );
};

export default Button;
