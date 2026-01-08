const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const connectDB = require("./utils/db");
const { Server } = require("socket.io");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
global.io = io;

// ===== Routes =====
app.use("/auth", require("./routes/authRoutes"));
app.use("/tickets", require("./routes/ticketRoutes"));
app.use("/customers", require("./routes/customerRoutes"));


io.on("connection", () => console.log("⚡ Socket connected"));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("🚀 Backend running on", PORT));
