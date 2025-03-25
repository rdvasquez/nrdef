import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="leftside-footer">
          <Image
            className="logo"
            src="/logo.png"
            width={250} // Adjusted size for better proportion
            height={250}
            alt="logo"
          />
          <p className="footerverse">
            “How beautiful are the feet of those who bring good news.” <br />
            Romans 10:15
          </p>
        </div>

        <div className="rightside-footer">
          <nav className="footer-links">
            <Link href="/copyright">Copyright Policy</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </nav>
          <p className="footer-text">
            © {new Date().getFullYear()} Norwich Diocesan Evangelical
            Fellowship. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
