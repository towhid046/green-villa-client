import { useContext } from "react";
import { UserContext } from "./../providers/ContextProvider/ContextProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  if (user || loading) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;

};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
