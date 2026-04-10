import type { Metadata } from "next";

import "@/app/globals.css";



export const metadata: Metadata = {

  title: "App Router",

  description: "A Next.js application built with App Router featuring posts ",

  keywords: ["nextjs", "react", "app router", "posts", "blog"],

};



export default function RootLayout({

  children,

}: {

  children: React.ReactNode;

}) {

  return (

    <html lang="en">

      <body>{children}</body>

    </html>

  );

}