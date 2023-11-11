import { useEffect, useState } from "react"
import ProductsForm from "../components/ProductsForm";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export default function ProductsEdit({ url, axios }) {
    const navigate = useNavigate();

    // access token
    const token = localStorage.getItem("accessToken");

    // populate form with current values
    const { id } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [imgUrl, setImgUrl] = useState("");
    const [categoryId, setCategoryId] = useState(0);
    useEffect(() => {
        async function fetchProduct() {
            try {
                const { data } = await axios.get(`${url}product/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setName(data.foundProduct.name);
                setDescription(data.foundProduct.description);
                setPrice(data.foundProduct.price);
                setStock(data.foundProduct.stock);
                setImgUrl(data.foundProduct.imgUrl);
                setCategoryId(data.foundProduct.categoryId);
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
            }
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
    function categoryIdOnChange(event) {
        setCategoryId(event.target.value);
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const dataToBeAdded = { name, description, price, stock, imgUrl, categoryId };
        try {
            await axios.put(`${url}product/${id}`, dataToBeAdded, {
                headers: { Authorization: `Bearer ${token}` }
            });
            // redirect
            navigate(`/product/${id}`);
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
        }
    }

    return (<>
<div id="PRODUCTS-EDIT">
    <div className="relative flex flex-col justify-center h-[85dvh] my-5 overflow-hidden bg-base-100">
        <div className="w-full p-6 m-auto rounded-lg shadow-md max-w-2xl bg-base-200">
            <h1 className="m-3 text-3xl font-semibold text-center text-primary-focus">
            Edit Product
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
                buttonText="Edit"
            />
        </div>
    </div>
</div>
    </>)
}