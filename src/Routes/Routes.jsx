import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Register from "./../pages/Register/Register";
import Login from "./../pages/Login/Login";
import UserProfile from "./../pages/UserProfile/UserProfile";
import NotFound from "./../pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import Contact from "./../pages/Contact/Contact";
import News from './../pages/News/News';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        loader: () => fetch("/estates.json"),
        element: <Home />,
      },

      {
        path: "/news",
        loader: () => fetch("/news.json"),
        element: <News/>,
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
        path: "/estate/:estateId",
        loader: () => fetch("/estates.json"),
        element: (
          <PrivateRoute>
            <EstateDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
