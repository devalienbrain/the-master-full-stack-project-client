import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const DashboardSidebarContent = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <div className="p-4">
      <div className="flex flex-row lg:flex-col items-start gap-2">
        <img
          src={user?.photoUrl}
          alt="User Profile"
          className="w-16 rounded-full"
        />
        <span>{user?.displayName}</span>
        <span className="text-xs">{user?.email}</span>
        <button
          onClick={handleLogout}
          className="text-red-600 text-sm hover:underline"
        >
          Logout
        </button>
      </div>
      <hr />
      <Link to="/dashboard/allUsers">All users</Link>
      <div className="pt-4">
        {user?.isAdmin ? <div>I am an Admin</div> : <div>I am a User</div>}
      </div>
    </div>
  );
};

export default DashboardSidebarContent;
