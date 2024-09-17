import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif } from "next/font/google";

const notoserif = Noto_Serif ({ subsets: ["latin"], weight:["100","200","300"] });

export const metadata: Metadata = {
  title: "American Accent Training",
  description: "Speak English Confidently!",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en">
       <head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />

      <link rel="icon" href="/logo.svg"  />
    </head>
      <body className={notoserif.className}>{children}</body>
    </html>
  );
}
