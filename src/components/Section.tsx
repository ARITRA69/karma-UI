import React from "react";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Section = ({ title, description, children }: Props) => {
  return (
    <div>
      <h2 className="text-lg font-bold text-foreground/80">{title}</h2>
      <p className="mt-1 text-foreground/75">{description}</p>
      <div className="mt-3">
        <div className="flex flex-col rounded-xl border p-6 shadow-sm">
          <div className="flex flex-wrap gap-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Section;
