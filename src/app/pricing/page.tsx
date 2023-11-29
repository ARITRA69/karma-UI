import H1 from "@/components/customUI/H1";
import P from "@/components/customUI/P";
import Image from "next/image";
import React from "react";

type Props = {};

const Pricing = (props: Props) => {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto h-[calc(100vh-126px)] flex flex-col items-center justify-center gap-8">
      <H1 className="text-5xl md:text-[100px] text-center">
        Why are you intrested about pricing
      </H1>
      <div className="relative">
        <p className="px-6 py-3 md:text-3xl">It's Completely Free</p>
        <Image
          src="/images/brush-stroke.svg"
          width={2000}
          height={2000}
          alt=""
          className="absolute -z-10 top-[-100%] h-44"
        />
      </div>
    </div>
  );
};

export default Pricing;
