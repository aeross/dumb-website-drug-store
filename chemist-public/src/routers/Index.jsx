import { createBrowserRouter, redirect } from "react-router-dom";
import Parent from "../views/Parent";
import Home from "../views/Home";
import Details from "../views/Details";
const SERVER_URL = "https://server.andrewdh.tech/";

const router = createBrowserRouter([
    {
        path: "/pub",
        element: <Parent />,
        children: [
            { path: "product", element: <Home url={SERVER_URL} /> },
            { path: "product/:id", element: <Details url={SERVER_URL} />}
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
]);

export default router;