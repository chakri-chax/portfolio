const express = require("express");
const sendContact = require("../lib/sendContact");

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { status, msg } = await sendContact(req.body);
  res.status(status).json({ msg });
});

module.exports = router;
