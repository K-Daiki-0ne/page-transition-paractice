import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page Animation Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Sample Page Transition Animation</h1>
      </div>

    </div>
  )
}
