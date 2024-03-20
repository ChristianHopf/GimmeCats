import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import { AppWrapper } from "@/context";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gimme Cats",
  description: "Cats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <AppWrapper>
          <main className="flex min-h-screen flex-col items-center bg-white">
            <Header />
            {children}
          </main>
        </AppWrapper>
      </body>
    </html>
  );
}
