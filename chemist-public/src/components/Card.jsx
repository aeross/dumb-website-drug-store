import { Link } from "react-router-dom";

export default function Card({ product }) {
    return (<>
        <div key={product.id} className="card bg-base-100 shadow-xl">
            <figure>
                <img
                src={product.imgUrl}
                alt="Product image"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end mt-2">
                    <Link to={`/pub/product/${product.id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    </>)
}