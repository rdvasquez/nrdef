import { SignIn } from "@clerk/nextjs";
import styles from "./sign-inpage.module.css";

export default function SignInPage() {
  return (
    <div className={styles.signinpage}>
      <SignIn />;
    </div>
  );
}
