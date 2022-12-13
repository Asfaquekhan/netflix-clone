import { createContext, useContext, useEffect, useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import React from "react";
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setuser] = useState({});
  const [data, setdata] = useState(Number);
  function singUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  async function logOut(auth) {
    await signOut(auth);
    return;
  }
  function recomend(item) {
    setdata(item);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curr) => {
      setuser(curr);
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <AuthContext.Provider
      value={{ singUp, login, logOut, user, recomend, data }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(AuthContext);
}
