import { FiCalendar, FiClock, FiEdit2, FiTrash } from 'react-icons/fi'
import styles from './styles.module.scss'
import Head from 'next/head'
import SupportButton from '@/components/SupportButton'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { AddTask } from '@/components/Board/AddTask'
import { useHandleAddTask } from '@/hooks/board/useHandleAddTask'
import Link from 'next/link'

export interface BoardProps {
    user: {
        id: string
        name: string
    }
}

export default function Board({ user }: BoardProps) {
    const { input, loading, task, handleAddTask, handleSearchChange } = useHandleAddTask({ user })
    
    return (
        <>
            <Head>
                <title>Minhas tarefas - Board</title>
            </Head>
            <main className={styles.container}>
                <AddTask 
                    input={input}
                    onSubmit={handleAddTask}
                    onChange={handleSearchChange}
                />
                <h1>Voce tem {task.length} tarefas !</h1>

                <section>
                    {task.map((t: any) => {
                        return (
                            <article className={styles.taskList}>
                                <Link href={`/board/${t.id}`}>
                                    <p>{t.task}</p>
                                </Link>
                                <div className={styles.actions}>
                                    <div>
                                        <div>
                                            <FiCalendar size={20} color='#ffb800'/>
                                            <time>{t.createdFormated}</time>
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
                        )
                    })}
                </section>
            </main>

            <div className={styles.vipContainer}>
                <h3>Obrigado pro apoiar esse projeto.</h3>
                <div>
                    <FiClock size={28} color='#fff' />
                    <time>Última doação foi a 3 dias.</time>
                </div>
            </div>

            <SupportButton />
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req }) 

    if (!(session as any)?.id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const user = {
        name: session?.user?.name,
        id: (session as any)?.id
    }

    return {
        props: {
            user
        }
    }
}