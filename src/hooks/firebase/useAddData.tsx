import firebase_app from "@/services/firebaseConnection";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)

interface AddDataProps {
    collection: string,
    id: string
    data: any
}

export default async function useAddData({ collection, id, data }: AddDataProps) {
    let result = null;
    let error = null;

    try {
        await setDoc(doc(db, collection, id), data, { merge: true });
        result = { success: true }
    } catch (e) {
        error = e;
        result = { success: false, error: e }
    }

    return { result, error };
}