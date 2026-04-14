import type { Metadata } from "next";

import "@/app/globals.css";



export const metadata: Metadata = {

  title: "App Router",

  description: "A Next.js application built with App Router featuring posts ",

  keywords: ["nextjs", "react", "app router", "posts", "blog"],

  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    siteName: "App Router",
    type: "website",
    images: [
      {
        url: "https://picsum.photos/400/200?random=1",
        width: 1200,
        height: 630,
        alt: "App Router",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "App Router",
    description: "A Next.js application built with App Router featuring posts ",
    images: ["https://picsum.photos/400/200?random=1"],
  },

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