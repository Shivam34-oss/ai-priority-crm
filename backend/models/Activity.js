const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  ticketId: String,
  action: String,
  user: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Activity", ActivitySchema);
