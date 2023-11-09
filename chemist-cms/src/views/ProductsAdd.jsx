export default function ProductsAdd() {
    return (<>
<div id="PRODUCTS-ADD">
    <div className="relative flex flex-col justify-center h-[85dvh] my-5 overflow-hidden bg-base-100">
        <div className="w-full p-6 m-auto rounded-lg shadow-md max-w-2xl bg-base-200">
            <h1 className="m-3 text-3xl font-semibold text-center text-primary-focus">
            Add Product
            </h1>
            <form className=" grid grid-cols-2 gap-4">
            <div>
                <label className="label">
                <span className="text-base label-text">Name</span>
                </label>
                <input
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered input-primary"
                />
            </div>
            <div>
                <label className="label">
                <span className="text-base label-text">Description</span>
                </label>
                <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered input-primary"
                />
            </div>
            <div>
                <label className="label">
                <span className="text-base label-text">Price</span>
                </label>
                <input
                type="password"
                placeholder="Enter Username"
                className="w-full input input-bordered input-primary"
                />
            </div>
            <div>
                <label className="label">
                <span className="text-base label-text">Stock</span>
                </label>
                <input
                type="password"
                placeholder="Phone Number"
                className="w-full input input-bordered input-primary"
                />
            </div>
            <div>
                <label className="label">
                <span className="text-base label-text">Image (URL)</span>
                </label>
                <input
                type="password"
                placeholder="Phone Number"
                className="w-full input input-bordered input-primary"
                />
                {/* <a href="" class="text-xs ml-1 text-gray-600 hover:text-primary">Want to upload a file instead?</a> */}
            </div>
            <div>
                <label className="label">
                <span className="text-base label-text">Category</span>
                </label>
                <input
                type="password"
                placeholder="Home Address"
                className="w-full input input-bordered input-primary"
                />
            </div>
            <div>
                <button className="btn btn-primary">Add</button>
            </div>
            </form>
        </div>
    </div>
</div>
    </>)
}