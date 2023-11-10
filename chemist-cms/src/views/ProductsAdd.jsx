import { useState } from "react"
import { redirect } from "react-router-dom";
import ProductsForm from "../components/ProductsForm";

export default function ProductsAdd({ url, axios }) {
    // access token
    const token = localStorage.getItem("accessToken");

    // post data
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [category, setCategory] = useState("");
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
    function categoryOnChange(event) {
        setCategory(event.target.value);
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const dataToBeAdded = { name, description, price, stock, imgUrl, category };
        // const { data } = await axios.post(`${url}product/add`, dataToBeAdded, {
        //     headers: { Authorization: `Bearer ${token}` }
        // });
        console.log(dataToBeAdded);
        // redirect("/product");
    }

    return (<>
<div id="PRODUCTS-ADD">
    <ProductsForm 
        nameOnChange={nameOnChange}
        descriptionOnChange={descriptionOnChange}
        priceOnChange={priceOnChange}
        stockOnChange={stockOnChange}
        imgUrlOnChange={imgUrlOnChange}
        categoryOnChange={categoryOnChange}
        handleSubmit={handleSubmit}
    />
</div>
    </>)
}