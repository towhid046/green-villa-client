import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import PropTypes from "prop-types";

export const UserContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LogOutUser = () => {
    return signOut(auth)
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const userInfo = { createUser, user, LogOutUser };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};
ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
