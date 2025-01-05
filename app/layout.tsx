import type { Metadata } from "next";
import "./globals.css";
import '@/styles/style.css';
import {poppinsRegular} from "@/helpers/exportFonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={ poppinsRegular.className}
      >
        {children}
      </body>
    </html>
  );
}
