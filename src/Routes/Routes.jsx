import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Register from './../pages/Register/Register';
import Login from './../pages/Login/Login';
import UserProfile from './../pages/UserProfile/UserProfile';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h2 className="text-3xl">Error 404</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile/>
      },
      {
        path: "/user-profile",
        element: <UserProfile/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/login',
        element: <Login/>
      }
    ],
  },
]);

export default routes;