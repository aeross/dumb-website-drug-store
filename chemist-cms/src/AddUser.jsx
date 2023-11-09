export default function AddUser() {
    return (
<>
    <div className="relative flex flex-col justify-center h-[85dvh] my-5 overflow-hidden bg-base-100">
        <div className="w-full p-6 m-auto rounded-lg shadow-md max-w-2xl bg-base-200">
            <h1 className="m-3 text-3xl font-semibold text-center text-primary-focus">
                Add User
            </h1>
            <form className=" grid grid-cols-2 gap-4">
                <div>
                    <label className="label">
                    <span className="text-base label-text">Email</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="w-full input input-bordered input-primary"
                    />
                </div>
                <div>
                    <label className="label">
                    <span className="text-base label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="w-full input input-bordered input-primary"
                    />
                </div>
                <div>
                    <label className="label">
                    <span className="text-base label-text">Username</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Username"
                        className="w-full input input-bordered input-primary"
                    />
                </div>
                <div>
                    <label className="label">
                    <span className="text-base label-text">Phone Number</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Phone Number"
                        className="w-full input input-bordered input-primary"
                    />
                </div>
                <div className="col-span-2">
                    <label className="label">
                    <span className="text-base label-text">Address</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Home Address"
                        className="w-full input input-bordered input-primary"
                    />
                </div>
                <div>
                    <button className="btn btn-primary">Add User</button>
                </div>
            </form>
        </div>
    </div>
</>
    )
}