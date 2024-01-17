import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  {
    title: "Github",
    link: "/",
  },
  {
    title: "aritra",
    link: "/",
  },
];

const Header = () => {
  return (
    <header className="w-full border-b sticky top-0 z-50 backdrop-blur-md">
      <div className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center justify-start gap-2">
          <Image
            src="/logo.png"
            width={1000}
            height={1000}
            alt="logo"
            className="h-8 w-8"
          />
          <h1 className="text-2xl">Karma-UI</h1>
          <div className="border-b-2 w-20 border-foreground/70" />
        </Link>
        <div className="flex items-center gap-6">
          <nav className="sm:flex gap-3 hidden">
            {navLinks.map((navLink, i) => (
              <Link href={navLink.link} key={i}>
                {navLink.title}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
