import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";

export default function UserManagement() {

  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (user?.role === "admin") {
      axios.get("http://localhost:5000/users")
        .then(res => setUsers(res.data));
    }
  }, [user]);

  if (!user || user.role !== "admin")
    return <h2 className="text-center text-red-500 mt-10">Access Denied — Admin Only</h2>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <table className="w-full border rounded shadow bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map(u => (
            <tr key={u._id} className="text-center">
              <td className="p-2 border">{u.name}</td>
              <td className="p-2 border">{u.email}</td>
              <td className="p-2 border">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
