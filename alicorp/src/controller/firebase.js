import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import { useCollection } from "react-firebase-hooks/firestore";
const config = {
  apiKey: "AIzaSyB6XEWyLg5E4b7y04d0lPi4hBReaV87z30",
  authDomain: "alicorp-900d0.firebaseapp.com",
  databaseURL: "https://alicorp-900d0.firebaseio.com",
  projectId: "alicorp-900d0",
  storageBucket: "alicorp-900d0.appspot.com",
  messagingSenderId: "231413241727",
  appId: "1:231413241727:web:5d7d8ea10738dddb"
};
// Initialize Firebase
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }
  logout() {
    return this.auth.signOut()
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayName: name
    })
  }
  isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
  }
   getProducts (){
    return useCollection(this.db.collection("producto3"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  }); 
}
}

export default new Firebase();