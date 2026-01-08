const Ticket = require("../models/Ticket");
const Comment = require("../models/Comment");
const Activity = require("../models/Activity");

exports.createTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create({
      customer: req.body.customer,
      email: req.body.email,
      message: req.body.message,
      file: req.file?.filename || null,
      status: "Open",
      createdBy: req.user.id
    });

    await Activity.create({
      ticketId: ticket._id,
      user: req.user.id,
      action: "Ticket Created"
    });

    res.json(ticket);
  } catch (err) {
    res.status(500).json({ error: "Ticket creation failed" });
  }
};

exports.getTickets = async (req, res) => {
  res.json(await Ticket.find().sort({ createdAt: -1 }));
};

exports.updateTicket = async (req, res) => {
  const ticket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  await Activity.create({
    ticketId: ticket._id,
    user: req.user.id,
    action: "Status Updated"
  });

  res.json(ticket);
};

exports.deleteTicket = async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

exports.getComments = async (req, res) => {
  res.json(await Comment.find({ ticketId: req.params.id }).sort({ createdAt: 1 }));
};

exports.addComment = async (req, res) => {
  const comment = await Comment.create({
    ticketId: req.params.id,
    user: req.user.id,
    text: req.body.text
  });

  await Activity.create({
    ticketId: req.params.id,
    user: req.user.id,
    action: "Comment Added"
  });

  res.json(comment);
};

