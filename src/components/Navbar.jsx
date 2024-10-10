import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOutUser();
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Link to="/public">
                <a>Public</a>
              </Link>
              <Link to="/private">
                <a>Private</a>
              </Link>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            DEV.
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <Link to="/public">
              <a>Public</a>
            </Link>
            <Link to="/private">
              <a>Private</a>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                {/* <img src={`${user?.photoURL}`} /> */}
                <img src={user?.photoURL} className="w-7 rounded-full" />
                <span>{user?.displayName}</span>
                <button onClick={handleLogout} className="btn">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Navbar;
