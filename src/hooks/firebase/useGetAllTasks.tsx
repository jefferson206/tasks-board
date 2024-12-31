import { collection, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore"
import { formatCreatedDate } from "../utils/getFormatedDate"
import firebase_app from "@/services/firebaseConnection"
import { CustomSession } from "@/models/CustomSession";

export async function useGetAllTasks({ session }: { session: CustomSession }) {
    const db = getFirestore(firebase_app)
    const tasksCollection = collection(db, 'tasks')
    const tasksQuery = query(tasksCollection, 
        where('userId', '==', session.id), 
        orderBy('created', 'asc')
    )
    const querySnapshot = await getDocs(tasksQuery)
    const data = JSON.stringify(querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      createdFormated: formatCreatedDate(doc.data().created)
    })))

    return { response: data }
}