import { FormEvent } from "react"
import { FiPlus } from "react-icons/fi"
import styles from './styles.module.scss'

interface AddTaskProps {
    input: string
    onSubmit: (value: FormEvent) => void
    onChange: (value: string) => void
}

export function AddTask({ input, onSubmit, onChange }: AddTaskProps) {

    const handleChange = (value: any) => {
        onChange(value)
    }

    const handleAddTask = (value: FormEvent) => {
        onSubmit(value)
    }

    return (
        <form onSubmit={handleAddTask} className={styles.form}>
            <input 
                type='text'
                placeholder='Digite sua tarefa...'
                value={input}
                onChange={handleChange}
            />
            <button type='submit'>
                <FiPlus size={25} color='#17181f'/>
            </button>
        </form>
    )
}