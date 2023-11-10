import { useState } from "react";
import CategoriesForm from "../components/CategoriesForm";

export default function CategoriesEdit() {
    const [name, setName] = useState("");
    function nameOnChange(event) {
        setName(event.target.value);
    }

    return (<>
    <div className="relative flex flex-col justify-center h-[85dvh] my-5 overflow-hidden bg-base-100">
        <div className="w-full p-6 m-auto rounded-lg shadow-md max-w-2xl bg-base-200">
            <h1 className="m-3 text-3xl font-semibold text-center text-primary-focus">
                Edit Category
            </h1>
            <CategoriesForm />
        </div>
    </div>
    </>)
}