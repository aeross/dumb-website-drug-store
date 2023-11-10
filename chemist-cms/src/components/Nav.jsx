import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    // index 0 => current state, read only
    // index 1 => function to alter current state
    const [role, setRole] = useState("admin");



    return (
<>
    <nav className="navbar sticky top-0 z-10 p-3 bg-base-200 shadow">
    <div className="navbar-start">
        <Link to="/product">
            <div className="btn btn-ghost text-4xl font-bold px-6">
                <span className="text-secondary">C</span>
                <span className="text-accent">H</span>
                <span className="text-info">E</span>
                <span className="text-yellow-500">M</span>
                <span className="text-primary">I</span>
                <span className="text-error">S</span>
                <span className="text-success">T</span>
            </div>
        </Link>
    </div>
    <div className="navbar-center"></div>
    <div className="navbar-end">
        {/* If logged in as admin */}
        {/* { role === "admin" && (
            <div class="tooltip tooltip-bottom" data-tip="You're logged in as admin.">
                <label tabindex="0" class="btn btn-circle avatar pointer-events-none">
                    <div class="w-6 bg-warning rounded-full border-2 border-primary"></div>
                </label>
            </div>
        )
        } */}
        
        {/* If logged in as user */}
        {/* { role === "user" && (
            <>
            <div
                className="tooltip tooltip-bottom"
                data-tip="You're logged in as user."
                >
                <label tabIndex={0} className="btn btn-circle avatar pointer-events-none">
                    <div className="w-6 rounded-full bg-accent border-2 border-primary" />
                </label>
            </div>
            </>
        )} */}
        {/* <button className="btn mx-2 btn-primary btn-sm">Log Out</button> */}
        <div className="drawer drawer-end w-12">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label
                htmlFor="my-drawer-4"
                tabIndex={0}
                className="btn btn-ghost btn-circle"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                </label>
            </div>
            <div className="drawer-side">
                <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
                />
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <li className="disabled text-2xl mb-4">
                    <a>Username</a>
                </li>
                <li>
                    <Link to="/category">Categories</Link>
                </li>
                <li>
                    <Link to="/product">Products</Link>
                </li>
                </ul>
            </div>
        </div>
    </div>
    </nav>
</>
    )
}