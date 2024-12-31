import { UserFirebaseResponse } from "../types/user";
import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_FIREBASE_BASE_URL;
const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_API_KEY;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function firebaseLogin(
  email: string,
  password: string
): Promise<UserFirebaseResponse | undefined> {
  const url = `${BASE_URL}signInWithPassword?key=${API_KEY}`;
  const reqBody = {
    email,
    password,
    returnSecureToken: true,
  };
  try {
    const response = await axiosInstance.post(url, reqBody);
    return response.data;
  } catch (error) {
    console.log("Error@api/firebase.ts/firebaseLogin(): ", error);
    throw error;
  }
}

export async function firebaseSignup(
  email: string,
  password: string
): Promise<UserFirebaseResponse | undefined> {
  const url = `${BASE_URL}signUp?key=${API_KEY}`;
  const reqBody = {
    email,
    password,
    returnSecureToken: true,
  };
  try {
    const response = await axiosInstance.post(url, reqBody);
    return response.data;
  } catch (error) {
    console.log("Error@api/firebase.ts/firebaseSignup(): ", error);
    throw error;
  }
}
