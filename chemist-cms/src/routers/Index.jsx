import { createBrowserRouter, redirect } from "react-router-dom";
import axios from "axios";
import Login from "../views/Login";
import ProductsParent from "../views/ProductsParent";
import Products from "../views/Products";
import ProductsDetail from "../views/ProductsDetail";
import ProductsAdd from "../views/ProductsAdd";
const SERVER_URL = "http://35.247.184.191/";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login url={SERVER_URL}/>
    },
    {
        path: "/product",
        element: <ProductsParent />,
        children: [
            { path: "", element: <Products url={SERVER_URL} axios={axios}/> },
            { path: ":id", element: <ProductsDetail url={SERVER_URL} axios={axios}/> },
            { path: "add", element: <ProductsAdd url={SERVER_URL} axios={axios}/> },
        ]
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