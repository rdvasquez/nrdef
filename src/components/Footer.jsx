import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer container="footer">
      <div className="leftSide-footer">
        <Image
          className="logo"
          src="/logo.png"
          width={200}
          height={200}
          alt="logo"
        />
        <span className="verse">
          “How beautiful are the feet of those who bring good news” Romans 10:15
        </span>
        <button className="privacy">Privacy Policy</button>
        <button className="copyright">Copyright Policy</button>
      </div>
    </footer>
  );
}
