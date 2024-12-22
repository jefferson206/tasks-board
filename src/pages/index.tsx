import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { Donaters } from '@/components/Donaters';

export default function Home() {
  return (
    <>
      <Head>
        <title>Board de tarefas - Organizando suas tarefas.</title>
      </Head>

      <main className={styles.contentContainer}>
        <img src='/images/board-user.svg' alt='Ferramenta board' />
        <section className={styles.callToAction}>
          <h1>Uma ferramenta para seu dia a dia. Escreva, planejee organize-se...</h1>
          <p>
            <span>100% Gratuita</span> e online.
          </p>
        </section>

        <Donaters />
      </main>
    </>
  );
}
