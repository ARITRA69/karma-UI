import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-11/12 mx-auto pt-20 px-5">
      <main className="px-10 sm:px-16 space-y-40">
        <div className="mx-auto max-w-3xl space-y-20">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
