import { FormEvent, useState } from "react"
import { useAddData } from "../firebase/useAddData"
import { formatCreatedDate } from "../utils/getFormatedDate"
import { TaskListProps } from "@/models/TaskListProps"
import { BoardProps } from "@/models/BoardProps"

export function useHandleAddTask({ user, data }: BoardProps) {
    const [ input, setInput ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ tasks, setTasks ] = useState<TaskListProps[]>(JSON.parse(data))

    async function handleAddTask(value: FormEvent) {
        value.preventDefault()
        if (input === '') return

        const handleSave = async () => {
            const taskProps = {
                created: new Date(), 
                task: input,
                userId: user.id,
                name: user.name
            }
            const { result, loading } = await useAddData({ view: 'tasks', taskProps })
            setLoading(loading)

            if(!result.success) {
                console.log('Fail to save', result)
                return
            } else {
                setInput('')
                const data = {
                    ...result.docData,
                    createdFormated: formatCreatedDate(result.docData.created)
                }
                setTasks([...tasks, data])
                console.log('toast: Sucess saved')
            }
        }

        handleSave()
    }

    function handleSearchChange(event: any) {
        setInput(event.target.value)
    }

    return { input, loading, tasks, handleAddTask, handleSearchChange}    
}
