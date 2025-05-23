import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Norwich Diocesan Evangelical Fellowship",
  description:
    "A network of around 20 evangelical Anglican churches in Norfolk and the Waveney Valley",
  openGraph: {
    type: "website",
    url: "https://norwichdef.org",
    siteName: "Norwich DEF",
    images: [
      {
        url: "/logo.png",
        width: 300,
        height: 300,
        alt: "Norwich DEF Logo",
      },
    ],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          {/* Page Wrapper for full-height layout */}
          <div className="page-wrapper">
            <Header />
            <main className="page-content">{children}</main>
            <Footer />
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
