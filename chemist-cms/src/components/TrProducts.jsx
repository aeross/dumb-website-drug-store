import { Link } from "react-router-dom"

export default function TrProducts({ product }) {
    return (
<>
    <tr>
        <th>{product.id}</th>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td>{product.imgUrl}</td>
        <td>{product.Category.name}</td>
        <td>{product.User.username}</td>
        <td>
        <Link to={`/product/${product.id}`}><button className="btn btn-primary btn-sm mx-[2px]">
            Details
        </button></Link>
        </td>
    </tr>
</>
    )
}