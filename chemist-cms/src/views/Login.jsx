import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Login({ url, axios }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function usernameOnChange(event) {
        setUsername(event.target.value);
    }

    function passwordOnChange(event) {
        setPassword(event.target.value);
    }

    async function handleLogin(event) {
        event.preventDefault();
        try {
            let { data } = await axios.post(`${url}login`, { username, password });
            localStorage.setItem("accessToken", data.accessToken);
            navigate("/product");
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: error,
                text: error.response.data.message,
            });
            if (error.response.status === 404) navigate("/product");
            if (error.response.status === 403) navigate("/product");
            if (error.response.status === 401) navigate("/login");
        }
    }

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
                        onChange={usernameOnChange}
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
                        onChange={passwordOnChange}
                    />
                </div>
                <div>
                    <button onClick={handleLogin} className="btn btn-primary">Log In</button>
                </div>
                </form>
            </div>
        </div>
    </>)
}