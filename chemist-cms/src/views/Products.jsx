import { useEffect } from "react";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import TrProducts from "../components/TrProducts";
import Swal from "sweetalert2";

export default function Products({ url, axios }) {
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    // fetch products
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true);
                let { data } = await axios.get(`${url}product`, { 
                    headers: { Authorization: `Bearer ${token}` } 
                });
                setProducts(data.products);
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: error,
                    text: error.response.data.message,
                });
                if (error.response.status === 404) navigate("/product");
                if (error.response.status === 403) navigate("/product");
                if (error.response.status === 401) navigate("/login");
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [])

    
    // render page based on whether it's loading or not
    function renderPage() {
        if (loading) return <h1>Loading...</h1>
        if (!loading) return (
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
        )
    }

    return renderPage();
}