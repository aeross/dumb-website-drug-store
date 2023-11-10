import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Nav from "../components/Nav";

export default function AddUser({ url, axios }) {
    const token = `Bearer ${localStorage.getItem("accessToken")}`;
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [address, setAddress] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const { data } = await axios.post(`${url}add-user`, { email, password, username, phoneNum, address }, {
                headers: { Authorization: token }
            });
            console.log(data);
            Swal.fire({
                title: "Success",
                text: `${data.newUser.username} has been added as staff`
            })
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
    

    return (
<>
    <Nav />

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
                        onChange={(event) => { setEmail(event.target.value) }}
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
                        onChange={(event) => { setPassword(event.target.value) }}
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
                        onChange={(event) => { setUsername(event.target.value) }}
                        type="text"
                        placeholder="Enter Username"
                        className="w-full input input-bordered input-primary"
                    />
                </div>
                <div>
                    <label className="label">
                    <span className="text-base label-text">Phone Number</span>
                    </label>
                    <input
                        onChange={(event) => { setPhoneNum(event.target.value) }}
                        type="text"
                        placeholder="Phone Number"
                        className="w-full input input-bordered input-primary"
                    />
                </div>
                <div className="col-span-2">
                    <label className="label">
                    <span className="text-base label-text">Address</span>
                    </label>
                    <input
                        onChange={(event) => { setAddress(event.target.value) }}
                        type="text"
                        placeholder="Home Address"
                        className="w-full input input-bordered input-primary"
                    />
                </div>
                <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Add User</button>
                </div>
            </form>
        </div>
    </div>
</>
    )
}