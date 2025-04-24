import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Background Layer */}
      <div className="footer-bg"></div>

      {/* Main Content */}
      <div className="footer-top">
        <div className="footer-logo">
          <Image
            className="logo"
            src="/logo.png"
            width={250}
            height={250}
            alt="logo"
          />
        </div>

        <div className="footer-verse-partner">
          <div className="footerverse">
            “How beautiful are the feet of those who bring good news.” Romans
            10:15
          </div>
        </div>
      </div>

      <div className="rightside-footer">
        <div className="footer-partner">
          <span className="partner-label">Partnered with:</span>
          <a
            href="https://ceec.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-logo-link"
          >
            <Image
              className="partner-logo"
              src="/ceec.png"
              width={150}
              height={150}
              alt="CEEC Logo"
            />
          </a>
        </div>

        <nav className="footer-links">
          <Link href="/copyright">Copyright Policy</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </nav>

        <div className="footer-text">
          © {new Date().getFullYear()} Norwich Diocesan Evangelical Fellowship.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
