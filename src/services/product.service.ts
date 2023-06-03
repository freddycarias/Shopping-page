import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { Product } from '../models/product';
import { database } from './firebase';

export const productService = {
  getAll: async() => {
    try {
      const dataCollectionRef = collection(database, 'Products');
      const dataDocuments = await getDocs(dataCollectionRef);
      const data = dataDocuments.docs.map((doc) => {
        const product = doc.data() as Product;
        product.id = doc.id;
        return product;
      });
      return data as Product[];
    } catch (error) {
      throw new Error('Error fetching data from Firestore');
    }
  },
  getById: async(id: string) => {
    try {
      const productDocRef = doc(collection(database, "Products"), id);
      const productDocSnap = await getDoc(productDocRef);

      if (productDocSnap.exists()) {
        const product = productDocSnap.data() as Product;
        product.id = productDocSnap.id;
        return product;
      }
      throw new Error(`product ${id} doesn't exists`);
    } catch (error) {
      throw new Error('Error fetching data from Firestore');
    }
  },
}
