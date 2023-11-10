import { useEffect, useState } from "react"
import ProductsForm from "../components/ProductsForm";
import { redirect, useNavigate } from "react-router-dom";

export default function ProductsAdd({ url, axios }) {
    // access token
    const token = localStorage.getItem("accessToken");
    // const [submit, setSubmit] = useState(false);

    // post data
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [categoryId, setCategoryId] = useState(1);
    function nameOnChange(event) {
        setName(event.target.value);
    }
    function descriptionOnChange(event) {
        setDescription(event.target.value);
    }
    function priceOnChange(event) {
        setPrice(event.target.value);
    }
    function stockOnChange(event) {
        setStock(event.target.value);
    }
    function imgUrlOnChange(event) {
        setImgUrl(event.target.value);
    }
    function categoryIdOnChange(event) {
        setCategoryId(event.target.value);
    }

    // redirect after submission
    // useEffect(() => {
    //     if (submit) useNavigate()("/redirect")
    // }, [submit]);
    // submit
    async function handleSubmit(event) {
        event.preventDefault();
        const dataToBeAdded = { name, description, price, stock, imgUrl, categoryId };
        const { data } = await axios.post(`${url}product`, dataToBeAdded, {
            headers: { Authorization: `Bearer ${token}` }
        });
        // redirect
    }

    return (<>
<div id="PRODUCTS-ADD">
    <div className="relative flex flex-col justify-center h-[85dvh] my-5 overflow-hidden bg-base-100">
        <div className="w-full p-6 m-auto rounded-lg shadow-md max-w-2xl bg-base-200">
            <h1 className="m-3 text-3xl font-semibold text-center text-primary-focus">
                Add Product
            </h1>
            <ProductsForm 
                url={url}
                axios={axios}
                initialState={{ name, description, price, stock, imgUrl, categoryId }}
                nameOnChange={nameOnChange}
                descriptionOnChange={descriptionOnChange}
                priceOnChange={priceOnChange}
                stockOnChange={stockOnChange}
                imgUrlOnChange={imgUrlOnChange}
                categoryIdOnChange={categoryIdOnChange}
                handleSubmit={handleSubmit}
            />
        </div>
    </div>
</div>
    </>)
}