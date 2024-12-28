import { FiCalendar, FiClock, FiEdit2, FiPlus, FiTrash } from 'react-icons/fi'
import styles from './styles.module.scss'
import Head from 'next/head'
import SupportButton from '@/components/SupportButton'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'
import firebase_app from '../../services/firebaseConnection'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import useAddData from '@/hooks/firebase/useAddData'

interface BoardProps {
    user: {
        id: string
        name: string
    }
}

export default function Board({ user }: BoardProps) {
    const [input, setInput] = useState('')

    async function handleAddTask(e: FormEvent) {
        e.preventDefault()
        if (input === '') return
        const db = getFirestore(firebase_app)

        await addDoc(collection(db, 'task'), {
            created: new Date(), 
            task: input,
            userId: user.id,
            name: user.name
        }).then((doc) => {
            console.log('done')
        }).catch((err) => {
            console.log('error')
        })
        
        // const handleSave = async () => {
        //     const data = {
        //         created: new Date(), 
        //         task: input,
        //         userId: user.id,
        //         name: user.name
        //     }
        //     const { result, error } = await useAddData({ collection: 'tasks', id: input, data: data })
        
        //     console.log('result', result)
        //     if (error) {
        //       return console.log(error)
        //     }
        // }

        // handleSave()
    }

    return (
        <>
            <Head>
                <title>Minhas tarefas - Board</title>
            </Head>
            <main className={styles.container}>
                <form onSubmit={handleAddTask}>
                    <input 
                        type='text'
                        placeholder='Digite sua tarefa...'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
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