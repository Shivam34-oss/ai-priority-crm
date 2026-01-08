import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        form
      );

      if (!res.data?.token) {
        setError("Login failed — token not received");
        return;
      }

      login(res.data.user, res.data.token);
    } catch (err) {
      setError(err.response?.data?.error || "Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      {/* 🔥 Animated Title */}
      <div className="absolute top-10 text-center">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          Welcome — AI Priority CRM 🚀
        </h1>

        <p className="text-gray-500 mt-1">
          Smart Ticketing • Analytics • Automation
        </p>
      </div>

      {/* Login Card */}
      <div className="bg-white shadow-xl p-8 rounded-xl w-96 border border-gray-200">

        <h2 className="text-2xl font-bold text-center mb-4">
          Login
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-3 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 text-white font-semibold rounded"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}
