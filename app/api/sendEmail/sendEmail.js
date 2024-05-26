// utils/sendEmail.js
const nodemailer = require("nodemailer");

const sendEmail = async ({ email, subject, message, token }) => {
  const approvalLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/requisition/${token}?action=approve`;
  const rejectionLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/requisition/${token}?action=reject`;

  let transporter = nodemailer.createTransport({
    name: process.env.OPTIONAL_HOST,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465, // true for port 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: email,                    // List of recipients
    subject: subject,             // Subject line
    html: `
      <p>${message}</p>
      <p>Please click the link to approve or reject the requisition:</p>
      <a href="${approvalLink}">Approve</a><br/>
      <a href="${rejectionLink}">Reject</a>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return { message: "Success!", status: 200 };
  } catch (error) {
    console.error('Error sending email:', error);
    return { message: "Failed!", error: error.toString(), status: 500 };
  }
};

module.exports = sendEmail;
