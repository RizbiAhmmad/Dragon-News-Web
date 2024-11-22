import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/news",
        element: <h1>News layout</h1>
    },
    {
        path: "auth",
        element: <h1>Login</h1>

    },
    {
        path: "*",
        element: <h1>Error</h1>

    }
])

export default Router;