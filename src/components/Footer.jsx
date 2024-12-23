import React from "react";
import Image from "next/image";
import styles from "./Footer.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSideFooter}>
        <Image
          className="footerImage"
          src="/feet.png"
          layout="fill"
          objectFit="cover"
          alt="fellowship"
        />
      </div>
      <Image
        className={styles.logo}
        src="/logo.png"
        width={200}
        height={200}
        alt="logo"
      />
      <span className={styles.verse}>
        “How beautiful are the feet of those who bring good news” Romans 10:15
      </span>
      {/* <Image
          className={styles.footerPhoto}
          src="/feet.png"
          width={800}
          height={400}
          alt="mainImage"
        /> */}
      <button className={styles.privacy}>Privacy Policy</button>
      <button className={styles.copyright}>Copyright Policy</button>
      {/* </div> */}
    </footer>
  );
}
