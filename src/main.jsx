import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import UserContext  from "./providers/ContextProvider/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <UserContext>
        <RouterProvider router={routes} />
      </UserContext>
    </HelmetProvider>
  </React.StrictMode>
);
