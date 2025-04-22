import ContactForm from "@/components/Contact";
import NavBarBurger from "@/components/HamburgerMenu.jsx";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.contactWrapper}>
      <header className={styles.header}>
        <NavBarBurger />
      </header>

      <main className={styles.mainContent}>
        <div className={styles.textSection}>
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you. Whether you have a question, feedback,
            or just want to connect, feel free to drop us a message below.
          </p>
        </div>

        <div className={styles.formSection}>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
