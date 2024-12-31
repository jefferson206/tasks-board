import { getApps, initializeApp } from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBshmqM73YFUY9hk0zgnwvPapXPLzZvgOA",
    authDomain: "task-board-10b98.firebaseapp.com",
    projectId: "task-board-10b98",
    storageBucket: "task-board-10b98.firebasestorage.app",
    messagingSenderId: "909197157416",
    appId: "1:909197157416:web:e1ca3e3277caec8b2fc11d",
    measurementId: "G-TTKCX9WXHM"
};

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;

