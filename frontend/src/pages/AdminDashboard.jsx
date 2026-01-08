import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function AdminDashboard() {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== "admin")
    return <h2 className="text-center text-red-500 mt-10">Access Denied — Admin Only</h2>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Controls</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold">Analytics (Coming soon)</h3>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold">User Actions</h3>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold">System Logs</h3>
        </div>
      </div>
    </div>
  );
}

