import { createBrowserRouter, redirect } from "react-router-dom";
import axios from "axios";

import Login from "../views/Login";
import ProductsParent from "../views/ProductsParent";
import Products from "../views/Products";
import ProductsDetail from "../views/ProductsDetail";
import ProductsAdd from "../views/ProductsAdd";
import ProductsEdit from "../views/ProductsEdit";
import Categories from "../views/Categories";
import CategoriesParent from "../views/CategoriesParent";
import CategoriesEdit from "../views/CategoriesEdit";
import CategoriesAdd from "../views/CategoriesAdd";
import AddUser from "../views/AddUser";

const SERVER_URL = "http://35.247.184.191/";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login url={SERVER_URL} axios={axios}/>
    },
    {
        path: "/add-user",
        element: <AddUser url={SERVER_URL} axios={axios}/>
    },
    {
        path: "/product",
        element: <ProductsParent />,
        children: [
            { path: "", element: <Products url={SERVER_URL} axios={axios} /> },
            { path: ":id", element: <ProductsDetail url={SERVER_URL} axios={axios} /> },
            { path: "add", element: <ProductsAdd url={SERVER_URL} axios={axios} /> },
            { path: "edit/:id", element: <ProductsEdit url={SERVER_URL} axios={axios} /> },
            // lost URLs
            { path: "edit/*", element: <h3>You're lost, mate</h3> },
            { path: "*", element: <h3>You're lost, mate</h3> }
        ]
    },
    {
        path: "/category",
        element: <CategoriesParent />,
        children: [
            { path: "", element: <Categories url={SERVER_URL} axios={axios} /> },
            { path: "add", element: <CategoriesAdd url={SERVER_URL} axios={axios} /> },
            { path: "edit/:id", element: <CategoriesEdit url={SERVER_URL} axios={axios} /> },
            // lost URLs
            { path: "edit/*", element: <h3>You're lost, mate</h3> },
            { path: "*", element: <h3>You're lost, mate</h3> }
        ]
    },

    // "/" will redirect to home page
    {
        path: "/",
        loader: () => redirect("/pub/product")
    },

    // lost URLs
    {
        path: "*",
        element: <h3>You're lost, mate</h3>
    }
])

export default router;