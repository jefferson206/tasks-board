import firebase_app from "@/services/firebaseConnection"
import { addDoc, collection, getDoc, getFirestore } from "firebase/firestore"

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

    let result = { success: false, docData: null } as any
    let loading = true
    
    try {
        const docRef = await addDoc(collection(db, view), taskProps)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            const data = {
                ...docSnap.data(), 
                id: docSnap.id
            }
            result = { success: true, docData: data }
        } else {
            result = { success: false, docData: null }
        }
    } catch (error) {
        console.error("Error adding document: ", error)
        result = { success: false, docData: null }
    } finally {
        loading = false
    }

    return { result, loading }
}