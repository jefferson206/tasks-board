import { BoardProps } from "@/pages/board"
import { FormEvent, useState } from "react"
import { useAddData } from "../firebase/useAddData"

export function useHandleAddTask({ user }: BoardProps) {
    const [input, setInput] = useState('')
    const [ loading, setLoading ] = useState(false)

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
            const { result, loading } = await useAddData({ view: 'task', taskProps })
            setLoading(loading)

            if(!result.success) {
                console.log('Fail to save')
                return
            } else {
                setInput('')
                console.log('toast: Sucess saved')
            }
        }

        handleSave()
    }

    function handleSearchChange(event: any) {
        setInput(event.target.value)
    }

    return { input, loading, handleAddTask, handleSearchChange}    
}
