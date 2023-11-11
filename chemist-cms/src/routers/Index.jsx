import { createBrowserRouter, redirect } from "react-router-dom";
import axios from "axios";

import Login from "../views/Login";
import AddUser from "../views/AddUser";
import Parent from "../views/Parent";
import Products from "../views/Products";
import ProductsDetail from "../views/ProductsDetail";
import ProductsAdd from "../views/ProductsAdd";
import ProductsEdit from "../views/ProductsEdit";
import Categories from "../views/Categories";
import CategoriesEdit from "../views/CategoriesEdit";
import CategoriesAdd from "../views/CategoriesAdd";

const SERVER_URL = "https://server.andrewdh.tech/";

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
        element: <Parent />,
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
        element: <Parent />,
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
        loader: () => redirect("/login")
    },

    // lost URLs
    {
        path: "*",
        element: <h3>You're lost, mate</h3>
    }
])

export default router;