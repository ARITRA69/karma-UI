import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  tooltip?: string;
}

const Tooltip: FC<Props> = ({ children, tooltip }): JSX.Element => {
  return (
    <div className="group relative inline-block">
      {children}
      <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-neutral-50 p-1 text-foreground border border-neutral-300 absolute top-full mt-2 whitespace-nowrap rounded-xl text-sm">
        {tooltip}
      </span>
    </div>
  );
};

export default Tooltip;
