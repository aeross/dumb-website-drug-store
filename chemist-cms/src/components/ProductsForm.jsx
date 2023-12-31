import { useEffect, useState } from "react";
import ButtonSubmit from "./ButtonSubmit";

export default function ProductsForm(props) {
    const token = localStorage.getItem("accessToken");
    const { url, axios, initialState, nameOnChange, descriptionOnChange, priceOnChange, 
        stockOnChange, imgUrlOnChange, categoryIdOnChange, handleSubmit, buttonText } = props;

    // populate category options by getting category data from "/category"
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

    return (<>
        <form className=" grid grid-cols-2 gap-4">
        <div>
            <label className="label">
            <span className="text-base label-text">Name</span>
            </label>
            <input
                onChange={nameOnChange}
                type="text"
                placeholder="Name"
                className="w-full input input-bordered input-primary"
                value={initialState.name}
            />
        </div>
        <div>
            <label className="label">
            <span className="text-base label-text">Description</span>
            </label>
            <input
                onChange={descriptionOnChange}
                type="text"
                placeholder="Enter Description"
                className="w-full input input-bordered input-primary"
                value={initialState.description}
            />
        </div>
        <div>
            <label className="label">
            <span className="text-base label-text">Price</span>
            </label>
            <input
                onChange={priceOnChange}
                type="number"
                placeholder="Enter Price"
                className="w-full input input-bordered input-primary"
                value={initialState.price}
            />
        </div>
        <div>
            <label className="label">
            <span className="text-base label-text">Stock</span>
            </label>
            <input
                onChange={stockOnChange}
                type="number"
                placeholder="Enter Stock"
                className="w-full input input-bordered input-primary"
                value={initialState.stock}
            />
        </div>
        <div>
            <label className="label">
            <span className="text-base label-text">Image (URL)</span>
            </label>
            <input
                onChange={imgUrlOnChange}
                type="text"
                placeholder="Image URL"
                className="w-full input input-bordered input-primary"
                value={initialState.imgUrl}
            />
            {/* <a href="" class="text-xs ml-1 text-gray-600 hover:text-primary">Want to upload a file instead?</a> */}
        </div>
        <div>
            <label className="label">
            <span className="text-base label-text">Category</span>
            </label>
            <select 
                className="w-full input input-bordered input-primary" 
                onChange={categoryIdOnChange} 
                name="category" 
                id=""
            >
                { categories.map(c => {
                    return <option key={c.id} value={c.id}>{c.name}</option>
                }) }
            </select>
        </div>
        <div>
            <ButtonSubmit handleSubmit={handleSubmit} buttonText={buttonText}/>
        </div>
        </form>
    </>)
}