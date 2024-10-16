import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZaoxaNq1R_W93ErF4mM1TjIIeLiGA9NA",
  authDomain: "crwn-clothing-db-7d393.firebaseapp.com",
  projectId: "crwn-clothing-db-7d393",
  storageBucket: "crwn-clothing-db-7d393.appspot.com",
  messagingSenderId: "35933860908",
  appId: "1:35933860908:web:7ea64d86e7e6cc18428d89",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGoogleAPop = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // if (!userAuth) {
  //   return;
  // }

  const userRef = doc(db, "users", userAuth.uid);
  console.log(userAuth);
  // const snapShot = await getDoc(userRef);

  // if (!snapShot.exists()) {
  //   const { displayName, email } = userAuth;
  //   const createdAt = new Date();

  //   try {
  //     await setDoc(userRef, {
  //       displayName,
  //       email,
  //       createdAt,
  //     });
  //   } catch (error) {
  //     console.log("Error creating user", error.message);
  //   }
  // }

  return userRef;
}