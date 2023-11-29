"use client";
import H1 from "@/components/customUI/H1";
import P from "@/components/customUI/P";
import React from "react";

type Props = {};

const Documents = (props: Props) => {
  return (
    <div className="min-h-screen">
      <div className="w-11/12 xl:w-3/4 mx-auto">
        <P className="font-medium lg:text-xl">Documentation</P>
      </div>
    </div>
  );
};

export default Documents;
