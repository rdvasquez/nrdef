import styles from "./sof.module.css";
export default function StatementOfFaith() {
  return (
    <div className={styles.sofcontainer}>
      <h1 className={styles.softitle}>Statement of Faith</h1>
      <p className={styles.softext}>
        The Norwich Diocesan Evangelical Fellowship is a network of around 20
        evangelical Anglican churches in Norfolk and the Waveney Valley united
        by faith, love, and a commitment to sharing the good news in our
        communities.
      </p>
      <p className={styles.softext}>
        We believe in the one true God, who exists eternally in three persons:
        Father, Son, and Holy Spirit. We believe that Jesus Christ is the Son of
        God, fully divine and fully human, who was born of the Virgin Mary,
        crucified, died, and was buried, and on the third day rose again from
        the dead. We believe in the authority of Scripture as the inspired Word
        of God and the final authority for faith and practice.
      </p>
      <p className={styles.softext}>
        We believe in the necessity of repentance and faith in Jesus Christ for
        salvation, and that all who trust in Him are justified by grace through
        faith. We believe in the resurrection of the dead, the final judgment,
        and the eternal state of both the saved and the lost.
      </p>
      <button className={styles.sofbutton}>I agree</button>
    </div>
  );
}
