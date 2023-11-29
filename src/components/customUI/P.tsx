import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const P: FC<Props> = (props) => {
  return (
    <p className={`text-sm lg:text-base ${props.className}`}>
      {props.children}
    </p>
  );
};

export default P;
