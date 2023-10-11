import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/dashboard" className={styles.option}>
          Level 1: Dashboard
        </Link>
        <Link href="/form" className={styles.option}>
          Level 2 & 3: Form
        </Link>
      </div>
    </main>
  );
}
