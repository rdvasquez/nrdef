import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerImage">
        <Image
          className="footerImage"
          layout="fill"
          objectFit="cover"
          src="/feet.png"
          alt="feet of those who bring good news"
        />
      </div>
      <div className="leftside-footer">
        <Image
          className="logo"
          src="/logo.png"
          width={250}
          height={250}
          objectFit="cover"
          alt="logo"
        />
        <p className="footerverse">
          “How beautiful are the feet of those <br /> who bring good news”{" "}
          <br />
          Romans 10:15
        </p>
      </div>
      <div className="rightside-footer">
        © {new Date().getFullYear()} Norwich Diocesan Evangelical Fellowship.
        All rights reserved.
        <div className="policy">
          <div className="copyright">
            <Link href="/copyright" style={{ textDecoration: "none" }}>
              Copyright Policy
            </Link>
          </div>
          <div className="privacy">
            <Link href="/privacy" style={{ textDecoration: "none" }}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
