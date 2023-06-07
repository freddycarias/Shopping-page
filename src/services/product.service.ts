import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { Product } from "../models/product";
import { database } from "./firebase";

export const productService = {
  getAll: async () => {
    try {
      //hace referencia a Products de fireStore
      const dataCollectionRef = collection(database, "Products");
      //obtiene los documentos de Products y los almacena
      const dataDocuments = await getDocs(dataCollectionRef);

      // let products: Product[] = [];
      // for (let index = 0; index < dataDocuments.docs.length; index++) {
      //   const doc = dataDocuments.docs[index]; //a // b //c 1

      //   const product = doc.data() as Product;
      //   product.id = doc.id;
      //   products.push(product);
      // }

      // llamamos los documentos con .docs ,despues con el . map itero sobre cada documento y
      //lo guardo en el parametro doc
      const data = dataDocuments.docs.map((doc) => {
        //se extrae la informacion con doc.data() y
        //devuelve un objeto que contiene los campos y valores del documento.
        //se asume que la información extraída del documento se ajusta al tipo Product
        const product = doc.data() as Product;
        //se asigna el id del documento a la propiedad id del objeto product.
        //Esto se hace mediante product.id = doc.id
        //doc.id contiene el ID único del documento
        product.id = doc.id;
        //e devuelve el objeto product en cada iteración del map,
        //lo que resulta en un nuevo arreglo llamado data que contiene todos los objetos Product
        //obtenidos de los documentos
        return product;
      });
      return data;
    } catch (error) {
      throw new Error("Error fetching data from Firestore");
    }
  },
  getById: async (id: string) => {
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
      throw new Error("Error fetching data from Firestore");
    }
  },
  getByCategory: async (category: string) => {
    try {
      const dataCollectionRef = collection(database, "Products");
      const querySnapshot = await getDocs(dataCollectionRef);

      const data = querySnapshot.docs
        .filter((doc) => doc.data().productType === category)
        .map((doc) => {
          const product = doc.data() as Product;
          product.id = doc.id;
          return product;
        });
      return data;
    } catch (error) {
      throw new Error ("Error fetching data from Firestore")
    }
  },
};
