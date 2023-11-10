export default function TrCategories({ category }) {
    return (<>
    <tr>
        <th>{category.id}</th>
        <td>{category.name}</td>
        <td>
        <button className="btn btn-primary btn-sm mx-[2px]">Edit</button>
        <button className="btn btn-primary btn-sm mx-[2px]">Delete</button>
        </td>
    </tr>
    </>)
}