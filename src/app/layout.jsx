import React from "react";
import localFont from "next/font/local"; // import google font
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

// const GeistMonoVF = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Norwich Diocesan Evangelical Fellowship",
  description:
    "A network of Anglican Evangelical churches across Norwich, Norfolk, and the Waveney Valley",
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={`${geistMono.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <Header />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
