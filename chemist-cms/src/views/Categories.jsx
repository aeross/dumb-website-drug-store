export default function Categories() {
    return(<>
<div id="CATEGORIES">
    <div className="overflow-x-auto my-6">
        <h1 className="my-3 mx-3 text-2xl font-semibold text-primary-focus">
            Categories
        </h1>
        <table className="table table-zebra">
            {/* head */}
            <thead>
            <tr>
                <th />
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>
                <button className="btn btn-primary btn-sm mx-[2px]">Edit</button>
                <button className="btn btn-primary btn-sm mx-[2px]">
                    Delete
                </button>
                </td>
            </tr>
            {/* row 2 */}
            <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>
                <button className="btn btn-primary btn-sm mx-[2px]">Edit</button>
                <button className="btn btn-primary btn-sm mx-[2px]">
                    Delete
                </button>
                </td>
            </tr>
            {/* row 3 */}
            <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>
                <button className="btn btn-primary btn-sm mx-[2px]">Edit</button>
                <button className="btn btn-primary btn-sm mx-[2px]">
                    Delete
                </button>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>dummy</td>
                <td>
                <button className="btn btn-primary btn-sm mx-[2px]">Edit</button>
                <button className="btn btn-primary btn-sm mx-[2px]">
                    Delete
                </button>
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>dummy</td>
                <td>
                <button className="btn btn-primary btn-sm mx-[2px]">Edit</button>
                <button className="btn btn-primary btn-sm mx-[2px]">
                    Delete
                </button>
                </td>
            </tr>
            <tr>
                <td>6</td>
                <td>dummy</td>
                <td>
                <button className="btn btn-primary btn-sm mx-[2px]">Edit</button>
                <button className="btn btn-primary btn-sm mx-[2px]">
                    Delete
                </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
    </>)
}