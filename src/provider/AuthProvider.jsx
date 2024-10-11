import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../public/firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  // Login with email
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Register with email and send data to backend
  const registerWithEmail = async (
    email,
    password,
    name,
    phone,
    photo,
    address
  ) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const newUser = userCredential.user;

    // Send user data to backend
    await fetch("http://localhost:5000/users", {
      // await fetch("https://the-master-full-stack-project-server.vercel.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: newUser.uid,
        email: newUser.email,
        displayName: name || "User",
        phone: phone,
        photoUrl: photo || "https://i.ibb.co.com/k6hTYW1/Alien-Dev.jpg",
        address: address,
        isAdmin: false, // Default role
        isBlocked: false, // Default status
      }),
    });

    return newUser;
  };

  // Logout user
  const logOutUser = () => {
    return signOut(auth);
  };

  // Monitor auth state and fetch user data from backend
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const res = await fetch(
          `http://localhost:5000/user/${currentUser.uid}`
        );
        // const res = await fetch(
        //   `https://the-master-full-stack-project-server.vercel.app/user/${currentUser.uid}`
        // );
        const data = await res.json();
        setUser(data);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{ registerWithEmail, user, loginWithEmail, logOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
