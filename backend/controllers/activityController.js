const Activity = require("../models/Activity");

async function logActivity(ticketId, user, action) {
  await Activity.create({ ticketId, user, action });
}

async function getTimeline(req, res) {
  res.json(
    await Activity.find({ ticketId: req.params.id }).sort({ timestamp: 1 })
  );
}

module.exports = { logActivity, getTimeline };
