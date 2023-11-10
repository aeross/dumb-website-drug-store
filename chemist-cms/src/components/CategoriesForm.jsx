export default function CategoriesForm({ nameOnChange, handleSubmit }) {
    

    return (<>
    <form className=" grid grid-cols-1 gap-4">
        <div className="mx-20">
            <label className="label">
            <span className="text-base label-text">Name</span>
            </label>
            <input
                onChange={nameOnChange}
                type="text"
                placeholder="Name"
                className="w-full input input-bordered input-primary"
            />
        </div>

        <div className="flex justify-center items-center">
            <button onClick={handleSubmit} className="btn btn-primary mt-4">Submit</button>
        </div>
    </form>
    </>)
}