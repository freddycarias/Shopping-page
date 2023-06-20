import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { database } from "./firebase";
import { Bank } from "../models/bank";

export const bankService = {
  getAllBank: async () => {
    try {
      const dataCollectionRef = collection(database, "Bank");
      const dataDos = await getDocs(dataCollectionRef);
      const data = dataDos.docs.map((doc) => {
        const bank = doc.data() as Bank;
        bank.id = doc.id;
        return bank;
      });
      return data;
    } catch (error) {
      throw new Error("Error fetching data from Firestore");
    }
  },
  deleteDoc: async (idDocumento: string) => {
    try {
      const referenciaDocumento = doc(collection(database, 'Bank'), idDocumento);
      await deleteDoc(referenciaDocumento);
      console.log('Documento eliminado exitosamente.');
    } catch (error) {
      console.error('Error al eliminar el documento:', error);
    }
  },
  addDoc: async (docName:string) => {
    try {
      const referenciaDocumento = collection(database, 'Bank');
      await addDoc(referenciaDocumento, {name: docName });
      console.log('Documento eliminado exitosamente.');
    } catch (error) {
      console.error('Error al eliminar el documento:', error);
    }
  },
};
