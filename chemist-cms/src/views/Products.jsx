import { useEffect } from "react";
import { useState } from "react"
import axios from "axios";

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
                <th />
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
                <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td>Blue</td>
                    <td>
                    <button className="btn btn-primary btn-sm mx-[2px]">
                        Details
                    </button>
                    </td>
                </tr>
                {/* row 2 */}
                <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                    <td>Purple</td>
                    <td>
                    <button className="btn btn-primary btn-sm mx-[2px]">
                        Details
                    </button>
                    </td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td>Red</td>
                    <td>
                    <button className="btn btn-primary btn-sm mx-[2px]">
                        Details
                    </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    </>)
}