import styles from "./aboutpage.module.css";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.content}>
        <h1 className={styles.content1}>
          Who is Diocesan Evangelical Fellowship?
        </h1>
        <p className={styles.description}>
          The Diocesan Evangelical Fellowship is a network of around 20
          evangelical Anglican churches in Norfolk and the Waveney Valley,
          united by faith, love, and a commitment to sharing the good news in
          our communities. Our membership currently consists of 71 individuals.
        </p>

        <h2 className={styles.content2}>Our purpose as an organisation is:</h2>
        <ul className={styles.list}>
          <li>To unite evangelical ministers and congregation members</li>
          <li>To promote evangelical faith, mission, and ministry</li>
          <li>
            To represent evangelical members in the wider Diocese of Norwich
          </li>
        </ul>

        {/* Call to Action Section */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Join our mission</h3>
          <p className={styles.ctaText}>
            If you share our passion for spreading the Gospel and strengthening
            local churches, we welcome you to learn more and get involved.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
