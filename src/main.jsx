import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Friends from "./Friends";
import Leaderboard from "./Leaderboard";
import "./index.css";
import CameraPage from "./components/CameraPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
  {
    path: "/camera",
    element: <CameraPage />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
