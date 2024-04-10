import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Register from "./../pages/Register/Register";
import Login from "./../pages/Login/Login";
import UserProfile from "./../pages/UserProfile/UserProfile";
import NotFound from "./../pages/NotFound/NotFound";
import PrivateRoute  from "./PrivateRoute";
import AboutUs from './../pages/AboutUs/AboutUs';
import EstateDetails from "../pages/EstateDetails/EstateDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/user-profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:'/estate/:estateId',
        element: <EstateDetails/>
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
