import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const icons = [
  {
    title: "Auto Layout",
    src: "/icons/layout.svg",
    color: "#FFD43B",
  },
  {
    title: "Variants",
    src: "/icons/variants.svg",
    color: "#22B8CF",
  },
  {
    title: "Responsive",
    src: "/icons/responsive.svg",
    color: "#4C6EF5",
  },
];

export default function Home() {
  return (
    <main className="h-[80vh] flex flex-col items-center justify-center gap-20 pt-20">
      <div>
        <div className="relative">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl text-foreground/80 text-center">
            Build Complex & Responsive UI
          </h1>
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl text-foreground/50 text-center absolute top-2">
            Build Complex & Responsive UI
          </h1>
        </div>
        <h1
          className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl text-transparent text-center"
          style={{
            WebkitTextStroke: "1px gray",
          }}
        >
          Build Complex & Responsive UI
        </h1>
      </div>
      <div className="flex gap-10 items-center justify-center">
        {icons.map((icon, i) => (
          <div key={i} className="flex gap-1 items-center">
            <Image
              src={icon.src}
              width={1000}
              height={1000}
              alt={icon.title}
              className={`p-2 bg-[${icon.color}] rounded-lg h-10 w-10`}
            />
            <p className="leading-7 text-foreground/70">{icon.title}</p>
          </div>
        ))}
      </div>
      <Link href="/documents">
        <div className="h-[56px] flex items-center gap-5 bg-foreground w-44 border-foreground border-x-4 rounded-full group relative">
          <p className="text-lg text-background pl-5 absolute translate-x-10 group-hover:-translate-x-2 ease-in-out duration-500 ">
            Get Started
          </p>
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-background left-0 text-foreground group-hover:left-[calc(100%-48px)] ease-in-out duration-700 -rotate-45 group-hover:rotate-0 absolute group-hover:text-purple-500">
            <ArrowRight />
          </div>
        </div>
      </Link>
    </main>
  );
}
