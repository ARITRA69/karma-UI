import { FC, ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const H1: FC<HeadingProps> = (props) => {
  return (
    <h1
      className={`${props.className} text-3xl md:text-5xl lg:text-7xl font-bold`}
    >
      {props.children}
    </h1>
  );
};

export default H1;
