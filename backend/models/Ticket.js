const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  customer: String,
  email: String,
  message: String,
  priority: String,
  sentiment: String,
  analysis: String,
  status: { type: String, default: "Open" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Ticket", TicketSchema);
