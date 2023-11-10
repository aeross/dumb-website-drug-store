export default function ProductsForm(props) {
    const { nameOnChange, descriptionOnChange, priceOnChange, 
        stockOnChange, imgUrlOnChange, categoryOnChange, handleSubmit } = props;
    return (<>
        <form className=" grid grid-cols-2 gap-4">
        <div>
            <label className="label">
            <span className="text-base label-text">Name</span>
            </label>
            <input
                onChange={nameOnChange}
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
                onChange={descriptionOnChange}
                type="text"
                placeholder="Enter Password"
                className="w-full input input-bordered input-primary"
            />
        </div>
        <div>
            <label className="label">
            <span className="text-base label-text">Price</span>
            </label>
            <input
                onChange={priceOnChange}
                type="number"
                placeholder="Enter Username"
                className="w-full input input-bordered input-primary"
            />
        </div>
        <div>
            <label className="label">
            <span className="text-base label-text">Stock</span>
            </label>
            <input
                onChange={stockOnChange}
                type="number"
                placeholder="Phone Number"
                className="w-full input input-bordered input-primary"
            />
        </div>
        <div>
            <label className="label">
            <span className="text-base label-text">Image (URL)</span>
            </label>
            <input
                onChange={imgUrlOnChange}
                type="text"
                placeholder="Phone Number"
                className="w-full input input-bordered input-primary"
            />
            {/* <a href="" class="text-xs ml-1 text-gray-600 hover:text-primary">Want to upload a file instead?</a> */}
        </div>
        <div>
            <label className="label">
            <span className="text-base label-text">Category</span>
            </label>
            {/* <input
                onChange={categoryOnChange}
                type="text"
                placeholder="Home Address"
                className="w-full input input-bordered input-primary"
            /> */}
            <select className="w-full input input-bordered input-primary" onChange={categoryOnChange} name="category" id="">
                <option value="a">1</option>
                <option value="b">2</option>
                <option value="c">3</option>
            </select>
        </div>
        <div>
            <button className="btn btn-primary" onClick={handleSubmit}>Add</button>
        </div>
        </form>
    </>)
}