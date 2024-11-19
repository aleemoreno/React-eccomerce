import { getFirestore, query, where, collection, getDocs, doc, getDoc} from "firebase/firestore";
import { app } from './config'

const db = getFirestore(app);


export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = []

  querySnapshot.forEach((doc) => {
    products.push (doc.data())
});


   return products;
}
/* Filtrado */
export const getCategoryProducts = async (id) => {
    const q = query(collection(db, "products"), where("category", "==", id));
    const products = []

const querySnapshot = await getDocs(q);

querySnapshot.forEach((doc) => {
   products.push(doc.data())
});

  return products
}

export const getDetail = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
       
        return docSnap.data();
    } else {
        console.log("No such document!");
        return null;  
    }
}