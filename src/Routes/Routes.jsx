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
import News from "./../pages/News/News";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import SavedProperties from "./../pages/SavedProperties/SavedProperties";
import AddEstate from "../pages/AddEstate/AddEstate";
import MyEstates from "../pages/MyEstates/MyEstates";
import MyCart from "../pages/MyCart/MyCart";
import AllEstates from "../pages/AllEstates/AllEstates";

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
        path: "/estates/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/estates/${params.id}`),
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
        path: "/saved-properties",
        loader: () => fetch(`${import.meta.env.VITE_URL}/estates`),
        element: (
          <PrivateRoute>
            <SavedProperties />
          </PrivateRoute>
        ),
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/news/${params.id}`),
        element: <NewsDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/all-estates",
        element: <AllEstates />,
      },
      {
        path: '/add-estate',
        element: (
          <PrivateRoute>
            <AddEstate />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-estates',
        element: (
          <PrivateRoute>
            <MyEstates/>
          </PrivateRoute>
        ),
      },
      {
        path: '/my-cart',
        element: (
          <PrivateRoute>
            <MyCart/>
          </PrivateRoute>
        ),
      }
    ],
  },
]);

export default routes;
