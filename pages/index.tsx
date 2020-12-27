import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page Animation Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Home page</h1>
      </div>

      <div>
        <Link href="/about">
          about
        </Link>
      </div>

      <div>
        <Link href="/detail">
          detail
        </Link>
      </div>

      <div>
        <Link href="/fadein">
          Fadein
        </Link>
      </div>

    </div>
  )
}
