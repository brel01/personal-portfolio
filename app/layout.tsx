import type { Metadata } from "next";
import "./globals.css";
import '@/styles/style.css';
import {poppinsRegular} from "@/helpers/exportFonts";
import Head from 'next/head';

export const metadata: Metadata = {
  title: "TheKanyinsolaDiyan",
  description: "Kanyinsola Diyan Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
      <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
      />
      <link rel="icon" href="/profile.jpg"/>
    </Head>
    <body
        className={`${poppinsRegular.className} overflow-y-auto`}
      >
          {children}
      </body>
    </html>
  );
}
