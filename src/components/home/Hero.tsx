"use client";
import React from "react";
import localFont from "next/font/local";
import H1 from "../customUI/H1";
import P from "../customUI/P";
import { motion } from "framer-motion";
import { ArrowRight, Scale } from "lucide-react";
import Link from "next/link";
import GitHubUsers from "./GitHubUsers";
import Image from "next/image";

type Props = {};

const HeroBold = localFont({
  src: "../../../public/Fonts/CabinetGrotesk-Extrabold.otf",
});

const Hero = (props: Props) => {
  return (
    <div className="h-full flex flex-col justify-center gap-y-6 lg:gap-0">
      <div className="flex items-center">
        <div className="space-y-8 md:w-1/2">
          <div className="space-y-5">
            <P>55,000+ trusted users</P>
            <H1 className={HeroBold.className}>
              Make your website
              <br />
              Easier, Faster, Better
            </H1>
            <P className="w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </P>
          </div>
          {/*  */}
        </div>
        <div className="hidden md:inline-block md:w-1/2">
          <Image src="/images/hero.svg" height={2000} width={2000} alt="" />
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <Link href="/documents">
          {/*  */}
          <div className="h-[56px] flex items-center gap-5 bg-foreground w-44 border-foreground border-x-4 rounded-full group relative">
            <P className="text-lg text-background pl-5 absolute translate-x-10 group-hover:translate-x-0 ease-in-out duration-500 ">
              Get Started
            </P>
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-background left-0 text-foreground group-hover:left-[calc(100%-48px)] ease-in-out duration-700 -rotate-45 group-hover:rotate-0 absolute group-hover:text-purple-500">
              <ArrowRight />
            </div>
          </div>
          {/*  */}
        </Link>
        <GitHubUsers />
      </div>
    </div>
  );
};

export default Hero;
