import { useState} from "react";
import axios from "axios";


export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

 const handleSubmit = async e => {
  e.preventDefault();

  await axios.post("http://localhost:5000/auth/register", form);

  alert("Signup successful — Login now");
  window.location.href = "/login";
};

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-[380px]">
        <h2 className="text-xl font-bold text-center mb-4">Create Account</h2>

        <input
          className="border p-2 w-full mb-2 rounded"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          className="border p-2 w-full mb-2 rounded"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          className="border p-2 w-full mb-3 rounded"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Signup
        </button>

        <p className="text-center mt-2 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
