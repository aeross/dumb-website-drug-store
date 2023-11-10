import { Link } from "react-router-dom"

export default function TrCategories({ category, buttonOnClick }) {
    return (<>
    <tr>
        <th>{category.id}</th>
        <td>{category.name}</td>
        <td>
        <Link to={`/category/edit/${category.id}`}>
            <button className="btn btn-primary btn-sm mx-[2px]">Edit</button>
        </Link>
        <button onClick={buttonOnClick} className="btn btn-primary btn-sm mx-[2px]">Delete</button>
        </td>
    </tr>
    </>)
}