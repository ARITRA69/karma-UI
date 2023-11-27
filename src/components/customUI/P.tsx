import { FC, ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const P: FC<HeadingProps> = (props) => {
  return (
    <p className={`${props.className} text-sm lg:text-base`}>
      {props.children}
    </p>
  );
};

export default P;
