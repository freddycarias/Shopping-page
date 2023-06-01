import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore';
import { FirebaseApp } from 'firebase/app';

class StoreService {
  private app: FirebaseApp;
  private firestore: Firestore;

  constructor(app: FirebaseApp) {
    this.app = app;
    this.firestore = getFirestore();
  }

  async getData(): Promise<any[]> {
    try {
      const dataCollectionRef = collection(this.firestore, 'Products');
      const dataDocuments = await getDocs(dataCollectionRef);
      const data = dataDocuments.docs.map((doc) => doc.data());
      return data;
    } catch (error) {
      throw new Error('Error fetching data from Firestore');
    }
  }
}

export default StoreService;
