import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BeLifter",
  description: "Belifter a maior academia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full bg-[#0F0F10] min-h-screen text-white">
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
