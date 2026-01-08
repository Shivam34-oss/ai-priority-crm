import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function Sidebar() {
  const { user, logout } = useContext(AuthContext);

  // Hide sidebar when not logged in
  if (!user) return null;

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col p-5 gap-4">
      <h2 className="text-2xl font-bold">AI CRM</h2>

      <nav className="flex flex-col gap-2 text-gray-300">

        <Link to="/" className="px-3 py-2 rounded hover:bg-gray-700">
          Dashboard
        </Link>

        <Link to="/tickets" className="px-3 py-2 rounded hover:bg-gray-700">
          Tickets
        </Link>

        <Link to="/customers" className="px-3 py-2 rounded hover:bg-gray-700">
          Customers
        </Link>

        {/* Admin Only Section */}
        {user?.role === "admin" && (
          <>
            <p className="text-xs uppercase mt-4 text-gray-400">Admin Panel</p>

            <Link
              to="/admin"
              className="px-3 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white"
            >
              Admin Dashboard
            </Link>

            <Link
              to="/manage-users"
              className="px-3 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white"
            >
              User Management
            </Link>
          </>
        )}
      </nav>

      <button
        onClick={logout}
        className="mt-auto w-full bg-red-500 hover:bg-red-600 py-2 rounded font-semibold"
      >
        Logout
      </button>
    </aside>
  );
}

