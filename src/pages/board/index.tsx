import { FiCalendar, FiClock, FiEdit, FiEdit2, FiPlus, FiTrash } from 'react-icons/fi'
import styles from './styles.module.scss'
import Head from 'next/head'

export default function Board() {

    return (
        <>
            <Head>
                <title>Minhas tarefas - Board</title>
            </Head>
            <main className={styles.container}>
                <form>
                    <input 
                        type='text'
                        placeholder='Digite sua tarefa...'
                    />
                    <button type='submit'>
                        <FiPlus size={25} color='#17181f'/>
                    </button>
                </form>

                <h1>Voce tem 2 tarefas !</h1>

                <section>
                    <article className={styles.taskList}>
                        <p>Aprender criar projetos usando Next JS</p>
                        <div className={styles.actions}>
                            <div>
                                <div>
                                    <FiCalendar size={20} color='#ffb800'/>
                                    <time>22 Dezembro 2024</time>
                                </div>
                                <button>
                                    <FiEdit2 size={20} color='#fff' />
                                    <span>Editar</span>
                                </button>
                            </div>
                            <button>
                                <FiTrash size={20} color='#FF3636' />
                                <span>Excluir</span>
                            </button>
                        </div>
                    </article>
                </section>
            </main>

            <div className={styles.vipContainer}>
                <h3>Obrigado pro apoiar esse projeto.</h3>
                <div>
                    <FiClock size={28} color='#fff' />
                    <time>Última doação foi a 3 dias.</time>
                </div>
            </div>
        </>
    )
}