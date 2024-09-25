import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAzac5IDmYkeiLOL7FDtrTCGKG9eMnr4U",
  authDomain: "test-projec-4ff3e.firebaseapp.com",
  projectId: "test-projec-4ff3e",
  storageBucket: "test-projec-4ff3e.appspot.com",
  messagingSenderId: "1007796486473",
  appId: "1:1007796486473:web:d345775036ef52d0341a98",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
