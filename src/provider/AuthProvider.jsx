import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../public/firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  // Register with email and password
  const registerWithEmail = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const newUser = userCredential.user;

    // Send user data to backend
    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: newUser.uid,
        email: newUser.email,
        displayName: newUser.displayName || "User", // Customize as needed
        isAdmin: false, // Default to false
      }),
    });

    return newUser;
  };

  // Login with Google
  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const currentUser = result.user;

    // Check if the user exists in the backend
    const response = await fetch(
      `http://localhost:5000/users/${currentUser.uid}`
    );

    if (response.status === 404) {
      // If the user doesn't exist, store in backend
      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName || "User", // Customize as needed
          isAdmin: false, // Default to false
        }),
      });
    }

    return currentUser;
  };

  // Logout user
  const logOutUser = () => {
    return signOut(auth);
  };

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{ registerWithEmail, loginWithGoogle, user, logOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
