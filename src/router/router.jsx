import {
  createBrowserRouter,
} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import PageNotFound from "../Pages/Shared/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
  },
]);
export default router