import { useState } from 'react'

function Nav() {
  // index 0 => current state, read only
  // index 1 => function to alter current state
  const [loggedIn, setLoggedIn] = useState("");

  const buttonLogInOnClick = () => {
    setLoggedIn(loggedIn + "admin");
  }

  const buttonLogOutOnClick = () => {
    setLoggedIn("");
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
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn mx-2 btn-primary btn-sm">
                  Filter
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <label tabIndex={0} className="btn mx-2 btn-primary btn-sm">
                  Sort
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered input-primary w-24 md:w-auto mx-1 input-sm"
              />
              <button className="btn btn-ghost btn-circle">
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

export default Nav

