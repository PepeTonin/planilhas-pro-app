import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "firebase/auth";

import {
  sendLoginRequest,
  sendSignUpRequest,
  sendLogOutRequest,
  verifyAuthPersistence,
} from "../utils/firebaseAuthRequests";

interface AuthContextType {
  isAuthenticated: boolean;
  userData: User | null;
  requestLoginWithEmailAndPass: (
    email: string,
    password: string
  ) => Promise<User | undefined>;
  requestAccountCreation: (
    name: string,
    email: string,
    password: string
  ) => Promise<User | undefined | string>;
  verifyUserAlreadyLoggedIn: () => User | undefined;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<User | null>(null);

  async function requestLoginWithEmailAndPass(email: string, password: string) {
    const response = await sendLoginRequest(email, password);
    if (response) {
      setIsAuthenticated(true);
      setUserData(response);
    }
    return response;
  }

  async function requestAccountCreation(
    name: string,
    email: string,
    password: string
  ) {
    const response = await sendSignUpRequest(name, email, password);
    return response;
  }

  function verifyUserAlreadyLoggedIn() {
    const response = verifyAuthPersistence();
    if (response) {
      setIsAuthenticated(true);
      setUserData(response);
      return response;
    }
    return undefined;
  }

  async function logout(): Promise<void> {
    sendLogOutRequest();
    setIsAuthenticated(false);
    setUserData(null);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userData,
        requestLoginWithEmailAndPass,
        requestAccountCreation,
        verifyUserAlreadyLoggedIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
