import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Details({ url }) {
    const [product, setProduct] = useState([]);
    let { id } = useParams();
    
    useEffect(() => {
        async function fetchProduct() {
            const { data } = await axios.get(`${url}pub/product/${id}`);
            setProduct(data.foundProduct);
        }
        fetchProduct();
    }, [])
    
    return (
        <>
        <main>
            <div className="hero bg-base-100 min-h-[78dvh] my-6">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={product.imgUrl}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <div className="texts">
                            <h1 className="text-5xl font-bold text-primary-focus">{product.name}</h1>
                            <div className="py-6">
                                <p>{product.description}</p>
                                <p>Stock: {product.stock}</p>
                                <p>Price: {product.price}</p>
                            </div>
                        </div>
                        <div className="buttons">
                            <Link to="/pub/product"><button className="btn btn-primary">Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}