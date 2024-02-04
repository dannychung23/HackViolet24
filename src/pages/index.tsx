import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buddy Burg</title>
        <meta name="Buddy Burg" content="Apartment Community Chat App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Connect with <span className={styles.pinkSpan}>your Community!</span>
          </h1>
          <div className={styles.cardRow} >
            <div
              className={styles.card}
            >
              <h3 className={styles.cardTitle}>Are you feeling out of the loop when it comes to off-campus living?</h3>
              <div className={styles.cardText}>
                Let us help you by connecting you with your building community!
              </div>
            </div>
            
            <div
              className={styles.card}
            >
              <Link href="/List"> 
                  <h3 className={styles.cardTitle}>Find your building! →</h3>
              </Link>
              <div className={styles.cardText}>
                We currently offer chat services for the Edge, Hub, and Union student living communities.
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
