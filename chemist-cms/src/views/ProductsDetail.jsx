export default function ProductsDetail() {
    return (<>
<div id="PRODUCTS-DETAIL">
<main>
    <div className="hero bg-base-100 min-h-[78dvh] my-6">
    <div className="hero-content flex-col lg:flex-row">
        <img
        src="https://ik.imagekit.io/aeross/cat.jpg?updatedAt=1699260555605"
        className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
        <div className="texts">
            <h1 className="text-5xl font-bold text-primary-focus">
            Green Ash
            </h1>
            <div className="py-6">
            <p>
                This medication is known to relieve pain and reduce
                inflammation.
            </p>
            <p>Stock: 90</p>
            <p>Price: 261</p>
            </div>
        </div>
        <div className="buttons">
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-primary">Delete</button>
        </div>
        <form
            action=""
            encType="multipart/form-data"
            method="POST"
            className="my-1"
        >
            <input
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