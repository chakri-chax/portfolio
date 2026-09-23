const sendContact = require("../lib/sendContact");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ msg: "Method not allowed" });
  }
  const { status, msg } = await sendContact(req.body);
  res.status(status).json({ msg });
};
