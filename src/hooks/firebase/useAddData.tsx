import firebase_app from "@/services/firebaseConnection"
import { addDoc, collection, getFirestore } from "firebase/firestore"

interface TaskProps {
    created: Date
    task: string
    userId: string
    name: string
}

interface AddDataProps {
    view: string,
    taskProps: TaskProps
}

export async function useAddData({ view, taskProps }: AddDataProps) {
    const db = getFirestore(firebase_app)

    let result = { success: false }
    let loading = true

    await addDoc(collection(db, view), taskProps)
    .then(() => {
        result = { success: true }
    }).catch(() => {
        result = { success: false }
    }).finally(() => {
        loading = false
    })

    return { result, loading }
}