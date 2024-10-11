import { useState, useEffect } from "react";
import { FaTrash, FaEdit, FaUserShield } from "react-icons/fa";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users from the backend
  const fetchUsers = async () => {
    // const response = await fetch("http://localhost:5000/users");
    const response = await fetch("https://the-master-full-stack-project-server.vercel.app/users");
        const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers(); // Load users when the component mounts
  }, []);

  // Delete a user
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      // await fetch(`http://localhost:5000/user/${id}`, {
      await fetch(`https://the-master-full-stack-project-server.vercel.app/user/${id}`, {
        method: "DELETE",
      });
      fetchUsers(); // Reload users after deletion
    }
  };

  // Toggle admin status
  const handleToggleAdmin = async (user) => {
    const updatedUser = { ...user, isAdmin: !user.isAdmin };

    // await fetch(`http://localhost:5000/user/${user._id}`, {
    await fetch(`https://the-master-full-stack-project-server.vercel.app/user/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    fetchUsers(); // Reload users after update
  };

  // Update user info
  const handleUpdate = (user) => {
    // You can implement a form or modal here for updating user information
    alert(`Update info for user: ${user.name}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Users List</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-200 text-gray-600 text-left">
            <th className="py-2 px-4 border">#</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Role</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{user.displayName || "N/A"}</td>
              <td className="py-2 px-4 border">{user.email}</td>
              <td className="py-2 px-4 border">
                <img
                  src={user.photoURL || "https://via.placeholder.com/50"}
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="py-2 px-4 border">
                {user.isAdmin ? "Admin" : "User"}
              </td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => handleToggleAdmin(user)}
                  className={`mr-2 p-2 rounded-full text-white ${
                    user.isAdmin ? "bg-green-500" : "bg-blue-500"
                  }`}
                  title="Toggle Admin/User"
                >
                  <FaUserShield />
                </button>
                <button
                  onClick={() => handleUpdate(user)}
                  className="mr-2 p-2 rounded-full bg-yellow-500 text-white"
                  title="Edit User"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="p-2 rounded-full bg-red-500 text-white"
                  title="Delete User"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
