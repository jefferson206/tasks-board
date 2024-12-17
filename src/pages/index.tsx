import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Board de tarefas - Organizando suas tarefas.</title>
      </Head>
      <div>
        <h1 className={styles.title}>Primeiro Projeto com <span>Next.js</span></h1>
      </div>
    </>
  );
}
