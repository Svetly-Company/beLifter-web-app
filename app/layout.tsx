import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
        <main className="w-full bg-[#0F0F10] text-white min-h-screen scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-white scrollbar-track-transparent">
          {children}
        </main>
      </body>
    </html>
  );
}
