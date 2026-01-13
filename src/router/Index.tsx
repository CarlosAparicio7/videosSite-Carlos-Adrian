
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NewVideo from "../pages/NewVideo";
import Stats from "../pages/Stats";

export const router = createBrowserRouter([
    {path: "/", element: <Login/>},
    {path: "/home", element: <Home/>},
    {path: "/newVideo", element: <NewVideo/>},
    {path: "/stats", element: <Stats/>}
])