import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/clientApp';

export async function getMenu(): Promise<any> {
    const docRef = doc(db, "menu", "9ieywHWJM7FOg83FbggF");
    const docSnap = await (await getDoc(docRef)).data();
    return docSnap && docSnap.firstLayer
} 