export default function Login() {
return (<>
    <div className="relative flex flex-col justify-center h-[85dvh] overflow-hidden bg-base-100">
        <div className="w-full p-6 m-auto rounded-lg shadow-md lg:max-w-lg bg-base-200">
            <h1 className="text-3xl font-semibold text-center text-primary-focus">
                Log In
            </h1>
            <form className="space-y-4">
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
            {/* <a href="" class="text-xs text-gray-600 hover:text-blue-600 ml-1">Forgot Password?</a> */}
            <div>
                <button className="btn btn-primary">Log In</button>
            </div>
            {/* <a href="" class="text-xs text-gray-600 hover:text-blue-600 mr-auto">Don't have an account? Sign up</a> */}
            </form>
        </div>
    </div>
</>)
}