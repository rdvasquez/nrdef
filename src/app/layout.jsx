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
    title: "Norwich Diocesan Evangelical Fellowship",
    description: "Evangelical churches in Norfolk and the Waveney Valley",
    url: "https://norwichdef.org",
    siteName: "Norwich DEF",
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 630,
        alt: "Norwich DEF Logo",
      },
    ],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <body>
          <Header />
          <main>
            <div className="container">{children}</div>
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
