const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
  createTicket,
  getTickets,
  updateTicket,
  deleteTicket,
  addComment,
  getComments
} = require("../controllers/ticketController");

router.get("/", auth, getTickets);
router.post("/", auth, upload.single("file"), createTicket);
router.patch("/:id", auth, updateTicket);
router.delete("/:id", auth, admin, deleteTicket);

router.get("/:id/comments", auth, getComments);
router.post("/:id/comments", auth, addComment);

module.exports = router;
