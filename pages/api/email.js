export default function handler(req, res) {
  // Get email from request param.
  const email = req.body.email;

  // Send response with json output of email.
  res.status(200).json({ email: email })
}