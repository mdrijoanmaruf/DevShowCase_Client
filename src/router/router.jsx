import {
  createBrowserRouter,
} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
  },
]);
export default router