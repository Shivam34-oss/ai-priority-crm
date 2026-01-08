import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function ProtectedRoute({ children, role }) {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" replace />;

  // Admin-only route check
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}

