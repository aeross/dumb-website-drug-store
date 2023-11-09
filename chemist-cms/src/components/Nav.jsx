import { useState } from 'react'

export default function Nav() {
    // index 0 => current state, read only
    // index 1 => function to alter current state
    const [loggedIn, setLoggedIn] = useState("");
    const buttonLogInOnClick = () => {
        setLoggedIn(loggedIn + "admin");
    }
    const buttonLogOutOnClick = () => {
        setLoggedIn("");
    }

    // keep this here for now
    function handleSubmit(e) {
        e.preventDefault();
    }

    // handle filter submission
    const [filterQ, setFilterQ] = useState({});
    function handleCheck(e) {
        const inputData = e.target.value;
        const newFilterQ = {...filterQ};
        if (!newFilterQ[inputData]) {
        newFilterQ[inputData] = true;
        } else {
        newFilterQ[inputData] = false;
        }
        setFilterQ(newFilterQ);
    }

    // handle sort submission
    const [sortQ, setSortQ] = useState("");
    function handleRadio(e) {
        const inputData = e.target.value;
        const newSortQ = inputData;
        setSortQ(newSortQ);
        console.log(newSortQ);
    }
    return (
<>
    <nav className="navbar sticky top-0 z-10 p-3 bg-base-200 shadow">
    <div className="navbar-start">
        <a className="btn btn-ghost text-4xl font-bold px-6">
        <span className="text-secondary">C</span>
        <span className="text-accent">H</span>
        <span className="text-info">E</span>
        <span className="text-yellow-500">M</span>
        <span className="text-primary">I</span>
        <span className="text-error">S</span>
        <span className="text-success">T</span>
        </a>
    </div>
    <div className="navbar-center">
        { !loggedIn && (
        <>
            <div className="dropdown">
            <label tabIndex={0} className="btn mx-2 btn-primary btn-sm">Filter</label>
            <form onSubmit={handleSubmit} method="get" className="dropdown-content z-[1] menu px-3 m-1 shadow bg-base-100 rounded-box w-64">
                <div className="flex items-center justify-between">
                    <label htmlFor="a">Prescription Only Medication</label>
                    <input onChange={handleCheck} id="a" name="categoryId" value="1" type="checkbox" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="b">General Sales List</label>
                    <input onChange={handleCheck} id="b" name="categoryId" value="2" type="checkbox" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="c">Pharmacy Medicines</label>
                    <input onChange={handleCheck} id="c" name="categoryId" value="3" type="checkbox" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
                </div>
                <div className="flex items-center justify-center">
                    <button className="btn btn-sm btn-primary h-2 w-16" type="submit">Apply</button>
                </div>
                </form>
            </div>

            <div className="dropdown">
            <label tabIndex={0} className="btn mx-2 btn-primary btn-sm">Sort</label>
            <form method="get" className="dropdown-content z-[1] menu px-3 m-1 shadow bg-base-100 rounded-box w-64">
                <div className="flex items-center justify-between">
                <label htmlFor="desc">Newest</label>
                <input onChange={handleRadio} id="desc" name='sort' value="-createdAt" type="radio" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
                </div>
                <div className="flex items-center justify-between">
                <label htmlFor="asc">Oldest</label>
                <input onChange={handleRadio} id="asc" name='sort' value="createdAt" type="radio" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
                </div>
                <div className="flex items-center justify-center">
                <button onClick={handleSubmit} className="btn btn-sm btn-primary h-2 w-16" type="submit">Apply</button>
                </div>
            </form>
            </div>
            <form action="" method="get" className="flex justify-center items-center">
            <input
                
                type="search"
                name="search"
                placeholder="Search"
                className="input input-bordered input-primary w-24 md:w-auto mx-1 input-sm"
            />
            <button type="submit" className="btn btn-ghost btn-circle">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
                </svg>
            </button>
            </form>
            
        </>
        )}
        
    </div>
    <div className="navbar-end">
        {/* If not logged in */}
        { !loggedIn && (
            <>
            <button className="btn mx-2 btn-primary btn-sm" onClick={buttonLogInOnClick}>Log In</button>
            <button className="btn mx-2 btn-primary btn-sm">Sign Up</button>
            </>
        )
        }
        {/* If logged in as admin */}
        { loggedIn === "admin" && (
            <div class="tooltip tooltip-bottom" data-tip="You're logged in as admin.">
                <label tabindex="0" class="btn btn-circle avatar pointer-events-none">
                    <div class="w-6 bg-warning rounded-full border-2 border-primary"></div>
                </label>
            </div>
        )
        }
        
        {/* If logged in as user */}
        { loggedIn === "user" && (
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
        )
        }
        {/* If logged in */}
        { loggedIn && (
        <>
            <button className="btn mx-2 btn-primary btn-sm" onClick={buttonLogOutOnClick}>Log Out</button>

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
                    <a>Categories</a>
                </li>
                <li>
                    <a>Products</a>
                </li>
                </ul>
            </div>
            </div>
        </>
        )
        }
    </div>
    </nav>
</>
    )
}