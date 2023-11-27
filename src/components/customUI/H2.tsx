import { FC, ReactNode } from "react";

interface SubHeadingProps {
  children: ReactNode;
  className?: string;
}

const H2: FC<SubHeadingProps> = (props) => {
  return (
    <h2
      className={`${props.className} text-xl md:text-3xl lg:text-5xl font-medium`}
    >
      {props.children}
    </h2>
  );
};

export default H2;
