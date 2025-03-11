import styles from "./aboutpage.module.css";
export default function About() {
  return (
    <div className={styles.mainBox}>
      <div className={styles.contentBox}>
        <h1>Who is Diocesan Evangelical Fellowship?</h1>
        <p>
          The Diocesan Evangelical Fellowship is a network representing
          approximately 20 Anglican Evangelical churches across Norwich,
          Norfolk, and the Waveney Valley. Our membership currently consists of
          71 individuals.
        </p>
      </div>
      <div className={styles.goalsBox}>
        <h2>Our purpose as an organisation is:</h2>
        <ul>
          <li>To unite evangelical ministers and congregation members</li>
          <li>To promote evangelical faith, mission, and ministry</li>
          <li>
            To represent evangelical members in the wider Diocese of Norwich
          </li>
        </ul>
      </div>
    </div>
  );
}
