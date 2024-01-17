import React from "react";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Container = ({ title, description, children }: Props) => {
  return (
    <>
      <header>
        <h1 className="block text-2xl font-bold text-foreground/80 sm:text-3xl">
          {title}
        </h1>
        <p className="mt-2 text-lg font-semibold text-foreground/70">
          {description}
        </p>
      </header>
      <div className="space-y-10 md:space-y-16">{children}</div>
    </>
  );
};

export default Container;
