import {
  createBrowserRouter,
} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import PageNotFound from "../Pages/Shared/PageNotFound";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "/register",
            Component: Register
        },
        {
            path: "/login",
            Component: Login
        }
    ]
  },
]);
export default router