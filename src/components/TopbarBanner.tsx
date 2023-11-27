import React from "react";

type Props = {};

const TopbarBanner = (props: Props) => {
  return (
    <div className="w-full bg-foreground text-background py-2 flex gap-3 items-center justify-center text-sm">
      <p className="tracking-widest">This website is currently</p>
      <div className="bg-purple-600 border border-purple-800 px-3 rounded-full">
        Under Constraction
      </div>
    </div>
  );
};

export default TopbarBanner;
