import { useState } from "react";
import CategoriesForm from "../components/CategoriesForm";

export default function CategoriesAdd({ url, axios }) {
    const token = `Bearer ${localStorage.getItem("accessToken")}`;

    const [name, setName] = useState("");
    function nameOnChange(event) {
        setName(event.target.value);
    }
    async function handleSubmit(event) {
        event.preventDefault();
        await axios.post(`${url}category`, { name }, {
            headers: { Authorization: token }
        })
    }

    return (<>
    <div className="relative flex flex-col justify-center h-[85dvh] my-5 overflow-hidden bg-base-100">
        <div className="w-full p-6 m-auto rounded-lg shadow-md max-w-2xl bg-base-200">
            <h1 className="m-3 text-3xl font-semibold text-center text-primary-focus">
                Add Category
            </h1>
            <CategoriesForm 
                nameOnChange={nameOnChange}
                handleSubmit={handleSubmit}
            />
        </div>
    </div>
    </>)
}
