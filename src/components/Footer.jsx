import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-image">
          <Image
            className="footer-image"
            src="/bible.webp"
            layout="fill"
            objectFit="cover"
            alt="fellowship"
          />
        </div>
        <div className="footer-logo">
          <Image
            className="logo"
            src="/logo.png"
            width={250}
            height={250}
            alt="logo"
          />
          <div className="footerverse">
            “How beautiful are the feet of those who bring good news.” <br />
            Romans 10:15
          </div>
        </div>

        <div className="rightside-footer">
          <nav className="footer-links">
            <Link href="/copyright">Copyright Policy</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </nav>

          <div className="footer-text">
            © {new Date().getFullYear()} Norwich Diocesan Evangelical
            Fellowship. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
