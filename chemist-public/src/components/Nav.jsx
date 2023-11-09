export default function Nav() {
    return (<>
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
        <div className="dropdown">
            <label tabIndex={0} className="btn mx-2 btn-primary btn-sm">Filter</label>
            <form method="get" className="dropdown-content z-[1] menu px-3 m-1 shadow bg-base-100 rounded-box w-64">
                <div className="flex items-center justify-between">
                    <label htmlFor="a">Prescription Only Medication</label>
                    <input id="a" name="categoryId" value="1" type="checkbox" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="b">General Sales List</label>
                    <input id="b" name="categoryId" value="2" type="checkbox" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="c">Pharmacy Medicines</label>
                    <input id="c" name="categoryId" value="3" type="checkbox" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
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
                    <input id="desc" name='sort' value="-createdAt" type="radio" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="asc">Oldest</label>
                    <input id="asc" name='sort' value="createdAt" type="radio" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
                </div>
                <div className="flex items-center justify-center">
                    <button className="btn btn-sm btn-primary h-2 w-16" type="submit">Apply</button>
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
    </div>
    <div className="navbar-end">
        <button className="btn mx-2 btn-primary btn-sm">Log In</button>
        <button className="btn mx-2 btn-primary btn-sm">Sign Up</button>
    </div>
</nav>
    </>)
}