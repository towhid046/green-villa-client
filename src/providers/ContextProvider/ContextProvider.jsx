import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import {
  auth,
  githubProvider,
  googleProvider,
} from "../../firebase/firebase.config";
import PropTypes from "prop-types";
import axios from "axios";

export const UserContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logOutUser = () => {
    axios(`${import.meta.env.VITE_URL}/logout`)
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err))
    setLoading(false);
    return signOut(auth);
  };

  const updateUserProfile = (userName, imgUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: imgUrl,
    });
  };

  // Truck the current user status:
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      const loggedUser = currentUser?.email;
      if (loggedUser) {
        axios
          .post(`${import.meta.env.VITE_URL}/jwt`, { loggedUser })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
    return () => unSubscribe();
  }, []);

  const userInfo = {
    createUser,
    user,
    logOutUser,
    loginUser,
    logInWithGoogle,
    logInWithGithub,
    updateUserProfile,
    loading,
    setLoading,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};
ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
