import { database } from "./firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const shoppingCartService = {
  transferDocument: async (data: any) => {
    try {
      const targetCollectionRef = collection(database, "shoppingCart");
      await addDoc(targetCollectionRef, data);
      console.log("Transferencia de documento completada con éxito");
    } catch (error) {
      throw new Error("Error al transferir el documento: ");
    }
  },
  getAllProducts: (updateCallback: any) => {
    try {
      const dataCollectionRef = collection(database, "shoppingCart");
      const unsubscribe = onSnapshot(dataCollectionRef, (snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const bank = doc.data();
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
      const referenciaDocumento = doc(collection(database, "shoppingCart"),idDocumento);
      await deleteDoc(referenciaDocumento);
      console.log("Documento eliminado exitosamente.");
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  },
};
