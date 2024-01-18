import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Image from "next/image";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "karma/ui",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Image
            src="/gradiant.png"
            width={1000}
            height={1000}
            alt=""
            className="fixed -z-10 opacity-20 dark:opacity-30 -right-80 -top-80"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
