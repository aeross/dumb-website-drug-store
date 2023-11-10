import { useEffect, useState } from "react"
import ProductsForm from "../components/ProductsForm";
import { useParams } from "react-router-dom";

export default function ProductsEdit({ url, axios }) {
    // access token
    const token = localStorage.getItem("accessToken");

    // populate form with current values
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [imgUrl, setImgUrl] = useState("");
    const [category, setCategory] = useState(0);
    useEffect(() => {
        async function fetchProduct() {
            const { data } = await axios.get(`${url}product/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setProduct(data.foundProduct);
            setName(data.foundProduct.name);
            setDescription(data.foundProduct.description);
            setPrice(data.foundProduct.price);
            setStock(data.foundProduct.stock);
            setImgUrl(data.foundProduct.imgUrl);
            setCategory(data.foundProduct.category);
        }
        fetchProduct();
    }, [])

    // patch data
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
<div id="PRODUCTS-EDIT">
    <div className="relative flex flex-col justify-center h-[85dvh] my-5 overflow-hidden bg-base-100">
        <div className="w-full p-6 m-auto rounded-lg shadow-md max-w-2xl bg-base-200">
            <h1 className="m-3 text-3xl font-semibold text-center text-primary-focus">
            Edit Product
            </h1>
            {/* { console.log({ name, description, price, stock, imgUrl, category }) } */}
            <ProductsForm 
                url={url}
                axios={axios}
                initialState={{ name, description, price, stock, imgUrl, category }}
                nameOnChange={nameOnChange}
                descriptionOnChange={descriptionOnChange}
                priceOnChange={priceOnChange}
                stockOnChange={stockOnChange}
                imgUrlOnChange={imgUrlOnChange}
                categoryOnChange={categoryOnChange}
                handleSubmit={handleSubmit}
            />
        </div>
    </div>
</div>
    </>)
}