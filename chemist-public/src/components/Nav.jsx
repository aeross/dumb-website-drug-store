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
    <div className="navbar-center"></div>
    <div className="navbar-end">
        {/* <a href="/login"><button className="btn mx-2 btn-primary btn-sm">Log In</button></a> */}
        {/* <a href="login"><button className="btn mx-2 btn-primary btn-sm">Sign Up</button></a> */}
    </div>
</nav>
    </>)
}