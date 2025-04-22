import ContactForm from "@/components/Contact";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.contactWrapper}>
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
