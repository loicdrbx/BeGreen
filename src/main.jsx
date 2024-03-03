import ReactDOM from 'react-dom/client'
import React from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from "./App";
import Friends from "./Friends";
import "./index.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/friends',
   element: <Friends />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router ={router} />
    
  </React.StrictMode>,
)
