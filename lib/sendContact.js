const nodemailer = require("nodemailer");

// Shared by the Express route (local dev) and the Vercel function (api/contact.js).
// Returns { status, msg } rather than touching a response object.
async function sendContact({ name, email, message } = {}) {
  if (!name || !email || !message) {
    return { status: 200, msg: "Please fill in all the fields" };
  }

  const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, MAIL_TO } = process.env;

  if (!MAIL_HOST || !MAIL_USER || !MAIL_PASS) {
    console.log(`[contact] ${name} <${email}>: ${message}`);
    return { status: 200, msg: "Thanks for reaching out to me" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: Number(MAIL_PORT) || 587,
      secure: Number(MAIL_PORT) === 465,
      auth: { user: MAIL_USER, pass: MAIL_PASS },
    });

    await transporter.sendMail({
      from: MAIL_USER,
      to: MAIL_TO || MAIL_USER,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
    });

    return { status: 200, msg: "Thanks for reaching out to me" };
  } catch (err) {
    console.error("[contact] mail failed:", err.message);
    return { status: 500, msg: "Message could not be sent, please try again" };
  }
}

module.exports = sendContact;
