const nodemailer = require('nodemailer');
require('dotenv').config(); // Load from .env

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_RECEIVER,
  subject: 'Daily Cypress Test Report',
  text: 'Attached is the latest Cypress HTML report.',
  attachments: [
    {
      filename: 'report.html',
      path: './cypress/reports/mochawesome.html'
    }
  ]
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) return console.log('Failed to send email:', err);
  console.log('✅ Email sent:', info.response);
});
