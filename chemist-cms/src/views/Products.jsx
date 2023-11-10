import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import TrProducts from "../components/TrProducts";

export default function Products({ url, axios }) {
    const token = localStorage.getItem("accessToken");

    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
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
        <div className="flex justify-between items-center">
            <h1 className="my-3 mx-3 text-2xl font-semibold text-primary-focus">Products</h1>
            <Link to="/product/add"><button className="btn btn-primary btn-sm mx-3">Add</button></Link>
        </div>
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
                    return <TrProducts key={product.id} product={product} />
                }) }
            </tbody>
        </table>
    </div>
</div>
    </>)
}