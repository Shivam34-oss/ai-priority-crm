const nodemailer = require("nodemailer");

const mail = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS }
});

async function sendTicketMail(to, subject, text) {
  try {
    await mail.sendMail({ from: `"AI CRM" <${process.env.MAIL_USER}>`, to, subject, text });
  } catch (e) {
    console.log("Mail Error:", e.message);
  }
}

module.exports = sendTicketMail;
