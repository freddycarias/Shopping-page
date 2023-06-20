import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { database } from "./firebase";
import { Bank } from "../models/bank";

export const bankService = {
  getAllBank: (updateCallback: (arg0: Bank[]) => void) => {
    try {
      const dataCollectionRef = collection(database, "Bank");
      const unsubscribe = onSnapshot(dataCollectionRef, (snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const bank = doc.data() as Bank;
          bank.id = doc.id;
          return bank;
        });
        updateCallback(data);
      });
      return unsubscribe;
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
  editDoc: async (idDocumento: string, nuevoNombre: string) => {
    try {
      const referenciaDocumento = doc(collection(database, 'Bank'), idDocumento);
      await updateDoc(referenciaDocumento, {name: nuevoNombre });
      console.log('Documento eliminado exitosamente.');
    } catch (error) {
      console.error('Error al eliminar el documento:', error);
    }
  },
};
