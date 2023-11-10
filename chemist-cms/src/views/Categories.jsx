import { useState, useEffect } from "react";
import TrCategories from "../components/TrCategories";
import { Link } from "react-router-dom";

export default function Categories({ url, axios }) {
    const token = localStorage.getItem("accessToken");

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        async function fetchCategories() {
            const { data } = await axios.get(`${url}category`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setCategories(data.categories);
        }
        fetchCategories();
    }, [])

    // delete category
    function buttonOnClick(categoryId) {
        console.log("delete this category with id", categoryId);
    }

    return(<>
<div id="CATEGORIES">
    <div className="overflow-x-auto my-6">
        <div className="flex justify-between items-center">
            <h1 className="my-3 mx-3 text-2xl font-semibold text-primary-focus">
                Categories
            </h1>
            {/* Add not required in this challenge, so i'm turning it off */}
            {/* <Link to="/category/add"><button className="btn btn-primary btn-sm mx-3">Add</button></Link> */}
        </div>
        
        <table className="table table-zebra">
            <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
                { categories.map(category => {
                    return (<TrCategories 
                        key={category.id} 
                        category={category} 
                        buttonOnClick={() => { buttonOnClick(category.id) }} />)
                }) }
            </tbody>
        </table>
    </div>
</div>
    </>)
}