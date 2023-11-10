import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"

export default function ProductsDetail({ url, axios }) {
    const { id } = useParams();
    const navigate = useNavigate();
    // access token
    const token = `Bearer ${localStorage.getItem("accessToken")}`;

    // patch image
    const [file, setFile] = useState();
    // function uploadFile(event) {
    //     event.preventDefault();
    // }
    
    // fetch data
    const [product, setProduct] = useState({});
    useEffect(() => {
        async function fetchProduct() {
            const { data } = await axios.get(`${url}product/${id}`, { 
                headers: { Authorization: token } 
            });
            setProduct(data.foundProduct);
        }
        fetchProduct();
    }, [])

    // delete data
    function deleteOnClick() {
        async function del() {
            await axios.delete(`${url}product/${id}`, {
                headers: { Authorization: token }
            });
            // redirect
        }
        del();
    }


    return (<>
<div id="PRODUCTS-DETAIL">
<main>
    <div className="hero bg-base-100 min-h-[78dvh] my-6">
    <div className="hero-content flex-col lg:flex-row">
        <img
        src={product.imgUrl}
        className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
        <div className="texts">
            <h1 className="text-5xl font-bold text-primary-focus">
            {product.name}
            </h1>
            <div className="py-6">
            <p>{product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Price: {product.price}</p>
            </div>
        </div>
        <div className="buttons">
            <Link to={`/product/edit/${product.id}`}><button className="btn btn-primary mr-2">Edit</button></Link>
            <button onClick={deleteOnClick} className="btn btn-primary">Delete</button>
        </div>
        <form
            action=""
            encType="multipart/form-data"
            method="POST"
            className="my-1"
        >
            <input
                onChange={ (event) => {
                    event.preventDefault();
                    let file = event.target.files[0];
                    let formData = new FormData();

                    formData.append("image", file);

                    (async () => {
                        await axios.patch(`${url}product/${product.id}`, formData, {
                            headers: { Authorization: token }
                        });
                    })()

                    // trigger reload after everything's done
                    // navigate(`/product/${product.id}`);
                } }
                type="file"
                id="image"
                name="image"
                className="w-52 hidden"
            />
            <label
                htmlFor="image"
                className="text-xs ml-1 text-gray-600 hover:text-primary-focus hover:cursor-pointer"
            >
                Upload Image
            </label>
        </form>
        </div>
    </div>
    </div>
</main>
</div>
    </>)
}