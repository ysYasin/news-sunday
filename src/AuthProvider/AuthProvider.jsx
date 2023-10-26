import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loadding, SetLoading] = useState(true);

  //auth providers
  const googleProvider = new GoogleAuthProvider();

  //SignUp By Email and password
  const signinByEmailandPass = (email, password) => {
    SetLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //signup by google
  const signupWithGoogle = () => {
    SetLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithPass = (email, password) => {
    SetLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      SetLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // signout
  const Logout = () => {
    return signOut(auth);
  };

  const userAuth = {
    signinByEmailandPass,
    signupWithGoogle,
    loginWithPass,
    Logout,
    user,
    loadding,
  };
  return (
    <div>
      <authContext.Provider value={userAuth}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
