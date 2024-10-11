import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6 bg-white rounded-md shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src={user?.photoUrl}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">{user?.displayName}</h2>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium">User Details</h3>
        <ul className="mt-2 text-sm text-gray-600">
          <li>
            <strong>Role:</strong> {user?.isAdmin ? "Admin" : "User"}
          </li>
          <li>
            <strong>Email:</strong> {user?.email}
          </li>
          <li>
            <strong>Phone:</strong> {user?.phone || "N/A"}
          </li>
          {/* Add other profile details here */}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
