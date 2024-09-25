import firebase from "@react-native-firebase/app"
import auth from "@react-native-firebase/auth";

const credentials = {
  apiKey: "AIzaSyCAzac5IDmYkeiLOL7FDtrTCGKG9eMnr4U",
  authDomain: "test-projec-4ff3e.firebaseapp.com",
  projectId: "test-projec-4ff3e",
  storageBucket: "test-projec-4ff3e.appspot.com",
  messagingSenderId: "1007796486473",
  appId: "1:1007796486473:web:d345775036ef52d0341a98",
  databaseUrl: "https://test-projec-4ff3e-default-rtdb.firebaseio.com",
};

export async function firebaseSignInRequest(
  name: string,
  email: string,
  password: string
): Promise<any> {
  try {
    await firebase.initializeApp(credentials);
    console.log("Sign in request: ", name, email, password);
    const response = await auth().signInWithEmailAndPassword(email, password);
    const user = response.user;
    return user;
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      return "auth/email-already-in-use";
    }
    console.log("Sign in error: ", error);
    return undefined;
  }
}
