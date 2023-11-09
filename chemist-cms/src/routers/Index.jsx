import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../views/Login";
import Products from "../views/Products";
const SERVER_URL = "http://35.247.184.191/";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login url={SERVER_URL}/>
    },
    {
        path: "/product",
        element: <Products url={SERVER_URL}/>
    },
    // "/" will redirect to home page
    {
        path: "/",
        loader: () => redirect("/pub/product")
    },
    // any other URLs will redirect to "you're lost, mate"
    {
        path: "*",
        element: <h3>You're lost, mate</h3>  // placeholder
    }
])

export default router;