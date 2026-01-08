const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: "Email already exists" });

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hash,
      role: role || "agent"
    });

    res.json({
      message: "User registered successfully",
      user: { id: user._id, name: user.name, role: user.role }
    });

  } catch (err) {
    console.log("Register Error", err);
    res.status(500).json({ error: "Registration failed" });
  }
};


exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const ok = await bcrypt.compare(req.body.password, user.password);
    if (!ok) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch {
    res.status(500).json({ error: "Login failed" });
  }
};
