const nodemailer = require('nodemailer');

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
  text: 'Please find the Cypress test report attached.',
  attachments: [
    {
      filename: 'report.html',
      path: './cypress/reports/mochawesome.html'
    }
  ]
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log('Email failed: ', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
