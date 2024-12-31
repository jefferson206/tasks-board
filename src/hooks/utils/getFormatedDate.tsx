import { format } from "date-fns"

export function formatCreatedDate(firestoreTimestamp: any): string {
    const createdDate = new Date(firestoreTimestamp.seconds * 1000)
    return format(createdDate, 'dd MMMM yyyy')
}