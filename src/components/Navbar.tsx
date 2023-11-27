import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";

const chillax = localFont({
  src: "../../public/fonts/Chillax.otf",
});

const Navbar = () => {
  return (
    <div className="py-3">
      <main className="w-11/12 mx-auto flex gap-8 items-center">
        <div className="flex items-center">
          <h1 className={`${chillax.className} font-bold text-3xl`}>
            Karma UI
          </h1>
        </div>
        <div className="h-[2px] w-[60px] bg-black rounded-3xl"></div>
        <div className="h-[30px] w-[120px] rounded-3xl bg-[#d2cfce] flex items-center px-2 justify-between cursor-pointer hover:bg-[#ffffff] transition-all ease duration-500 hover:outline outline-1 outline-black">
          <Search size={18} />
          <p>Search</p>
        </div>
        <Link href="/">
          <h1 className="font-bold ">Docs</h1>
        </Link>
        <Link href="/">
          <h1 className="font-bold">About Us</h1>
        </Link>
        <Link href="/">
          <h1 className="font-bold ">Blog</h1>
        </Link>
      </main>
    </div>
  );
};

export default Navbar;
