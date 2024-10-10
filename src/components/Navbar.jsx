import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-2xl font-extrabold">
            DEV.
          </Link>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link to="/dashboard">
              <img src={user?.photoURL} className="w-7 rounded-full" />
            </Link>
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
