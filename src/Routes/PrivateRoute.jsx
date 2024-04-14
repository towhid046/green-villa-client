import { useContext, useEffect } from "react";
import { UserContext } from "./../providers/ContextProvider/ContextProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { scrollToTop } from "./../utility/scrollToTop";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();
  useEffect(() => {
    scrollToTop();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[90vh] flex justify-center items-center">
        <span className=" loading loading-lg loading-dots"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
