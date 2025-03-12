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
  },
};
const inter = Inter({
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Header />
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
