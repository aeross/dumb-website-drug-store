import { useEffect } from "react";
import { useState } from "react"
import axios from "axios";
import TrProducts from "../components/TrProducts";

export default function Products({ url }) {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
            let token = localStorage.getItem("accessToken");
            let { data } = await axios.get(`${url}product`, { 
                headers: { Authorization: `Bearer ${token}` } 
            });
            setProducts(data.products);
        }
        fetchProducts();
    }, [])

    return (<>
<div id="PRODUCTS-MAIN">
    <div className="overflow-x-auto my-6">
        <h1 className="my-3 mx-3 text-2xl font-semibold text-primary-focus">
            Products
        </h1>
        <table className="table table-zebra">
            {/* head */}
            <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Image URL</th>
                <th>Category</th>
                <th>User</th>
                <th />
            </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                { products.map(product => {
                    return <TrProducts product={product} />
                }) }
            </tbody>
        </table>
    </div>
</div>
    </>)
}