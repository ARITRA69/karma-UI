import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";
import Logo from "../../public/Logo/karma-logo.png";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "./devUI/ui/dialog";
import { Input } from "./devUI/ui/input";

const chillax = localFont({
  src: "../../public/fonts/Chillax.otf",
});

const Navbar = () => {
  return (
    <div className="py-3 bg-background">
      <main className="w-11/12 xl:w-3/4 mx-auto flex gap-8 items-center justify-between">
        <div className="flex gap-8 items-center">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src={Logo}
              width={500}
              height={500}
              alt="Karma"
              className="h-6 w-6"
            />
            <h1
              className={`${chillax.className} font-bold text-2xl lg:text-3xl`}
            >
              Karma UI
            </h1>
          </Link>
          <div className="h-[2px] w-[60px] bg-black rounded-3xl"></div>
          <Dialog>
            <DialogTrigger className="rounded-3xl bg-[#f1f1f1] flex items-center px-4 py-2 gap-x-4 justify-between cursor-pointer hover:bg-[#ffffff] transition-all ease duration-500 hover:outline outline-1 outline-black opacity-60">
              <Search size={18} />
              <p>Quick Search</p>
            </DialogTrigger>
            <DialogContent className="border border-neutral-500 h-[250px] flex flex-col justify-start">
              <div className="flex items-center border-b border-neutral-500">
                <Input
                  placeholder="Search Documentation"
                  className="border-none rounded-t"
                />
                <DialogClose className="p-2 text-sm bg-[#f1f1f1] text-opacity-60 rounded-sm opacity-70 transition-opacity hover:opacity-100">
                  ESC
                </DialogClose>
              </div>
              <div className="overflow-auto"></div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex gap-8 items-center">
          <Link href="/docs">
            <h1 className="">Docs</h1>
          </Link>
          <Link href="/about-us">
            <h1 className="">About Us</h1>
          </Link>
          <Link href="/blog">
            <h1 className="">Blog</h1>
          </Link>
          <Link href="/pricing" className="relative">
            <div className="-z-10">
              <Image
                src="/images/line-brush-stroke.svg"
                width={500}
                height={500}
                alt=""
                className=" rotate-45 absolute top-[50%]"
              />
              <Image
                src="/images/line-brush-stroke.svg"
                width={500}
                height={500}
                alt=""
                className="-rotate-45 absolute top-[50%]"
              />
            </div>
            <h1 className="z-10">Pricing</h1>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
