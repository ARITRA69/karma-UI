import Link from "next/link";
import React from "react";

type Props = {};

const navs = [
  { id: 1, title: "Button", href: "button" },
  { id: 2, title: "Input", href: "input" },
];

const SideNavigation = (props: Props) => {
  return (
    <div className="h-[80vh] hidden md:flex flex-col space-y-6 w-1/5 text-end overflow-y-auto fixed top-30 left-0 px-6">
      <h2 className="font-bold">All Components</h2>
      <ul>
        {navs.map((nav) => (
          <li key={nav.id}>
            <Link href={`/docs/${nav.href}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavigation;
