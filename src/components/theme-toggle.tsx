"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="relative inline-flex p-2 sm:p-4 transition-all duration-300"
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      <SunIcon
        className="h-[1.5rem] w-[1.5rem] tranition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0"
        style={{
          transition: "transform 0.6s ease",
        }}
      />
      <MoonIcon
        className="h-[1.5rem] w-[1.5rem] absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100"
        style={{
          transition: "transform 0.6s ease",
        }}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
