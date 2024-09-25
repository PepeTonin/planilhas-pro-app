import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  sendPasswordResetEmail,
  sendEmailVerification,
  AuthError,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyCAzac5IDmYkeiLOL7FDtrTCGKG9eMnr4U",
  authDomain: "test-projec-4ff3e.firebaseapp.com",
  projectId: "test-projec-4ff3e",
  storageBucket: "test-projec-4ff3e.appspot.com",
  messagingSenderId: "1007796486473",
  appId: "1:1007796486473:web:d345775036ef52d0341a98",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

interface UpdateUserData {
  displayName?: string;
  photoUrl?: string;
}

interface UpdateUserRequest {
  idToken: string;
  data: UpdateUserData;
}

export async function sendUpdateUserDataRequest({
  idToken,
  data,
}: UpdateUserRequest): Promise<void> {
  try {
    const endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${firebaseConfig.apiKey}`;
    await axios.post(endPoint, {
      idToken,
      ...data,
      returnSecureToken: true,
    });
  } catch (error) {
    console.error("Error updating user data:", error);
  }
}

export async function sendSignUpRequest(
  name: string,
  email: string,
  password: string
): Promise<User | undefined | string> {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    try {
      await sendEmailVerification(user);
    } catch (error) {
      console.log("Error sending email verification:", error);
    }
    const userData = { displayName: name };
    const idToken = await user.getIdToken();
    await sendUpdateUserDataRequest({ idToken, data: userData });
    return user;
  } catch (error: AuthError | any) {
    if (error.code === "auth/email-already-in-use") {
      return "auth/email-already-in-use";
    }
    console.error("Error signing up:", error);
    return undefined;
  }
}

export async function sendLoginRequest(
  email: string,
  password: string
): Promise<User | undefined> {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;
    return user;
  } catch (error) {
    console.log("Error logging in:", error);
    return undefined;
  }
}

export async function sendGetUserDataRequest(
  idToken: string
): Promise<User | undefined> {
  try {
    const endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${firebaseConfig.apiKey}`;
    const payload = { idToken: idToken };
    const response = await axios.post(endPoint, payload);
    return response.data.users[0];
  } catch (error) {
    console.error("Error getting user data:", error);
    return undefined;
  }
}

export async function sendLogOutRequest() {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("Error logging out:", error);
  }
}

export async function sendResetPasswordRequest(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log("Error sending password reset", error);
  }
}

export function verifyAuthPersistence() {
  const user = auth.currentUser;
  console.log("user", user);
  if (user) {
    return auth.currentUser;
  }
  return undefined;
}

export function foo(){
  console.log('auth', auth.currentUser)
}
