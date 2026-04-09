import type { Metadata } from "next";
import "@/app/globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "PageRouter",
    template: "%s",
  },
  description: "A Next.js application built with Pages Router featuring posts and modern UI",
  keywords: ["nextjs", "react", "pages router", "posts", "blog"],
  
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