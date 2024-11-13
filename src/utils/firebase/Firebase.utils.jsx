import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZaoxaNq1R_W93ErF4mM1TjIIeLiGA9NA",
  authDomain: "crwn-clothing-db-7d393.firebaseapp.com",
  projectId: "crwn-clothing-db-7d393",
  storageBucket: "crwn-clothing-db-7d393.appspot.com",
  messagingSenderId: "35933860908",
  appId: "1:35933860908:web:7ea64d86e7e6cc18428d89",
};

initializeApp(firebaseConfig);

const googlProvider = new GoogleAuthProvider();

googlProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGoogleAPopup = () =>
  signInWithPopup(auth, googlProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googlProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) {
    return;
  }
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        fullName: displayName || "Nom non fourni",
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return await createUserWithEmailAndPassword(auth, email, password);
}

/* Sign in with email and password */

export const signInWithEmailPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error signing in with email and password', error);
    if (error.code === 'auth/invalid-credential') {
      console.error('Invalid credentials provided.');
    }
    throw error; // Rejeter l'erreur pour qu'elle puisse être capturée dans handleSubmitSignIn
  }
};

export const signOutUser = async () => {
  try {
    return await signOut(auth);
  } catch (error) {
    console.error('Error signing out', error);
    throw error;
  }
};

// Auth state change listener

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};