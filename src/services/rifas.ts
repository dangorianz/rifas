import { db } from "@/config/firebase";
import { collection, getDocs, query } from "firebase/firestore";

export const getRifas = async () => {
    try {
        const rifas = query(collection(db, 'rifas'));
        const snapshot = await getDocs(rifas);
        const rifasList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return { error: '', rifas: rifasList }
    } catch (error) {
        console.log(error);
        return {error:'Internal Error', rifas: []};
    } 
}