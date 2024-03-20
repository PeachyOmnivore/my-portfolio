/* eslint-env node */
const nodeMailer = require('nodemailer');
require("dotenv").config()

exports.handler = async (event) => {
    const { name, subject, title, email, message } = JSON.parse(event.body);

    const emailContent = `
      <h1>${title}</h1>
      <p>${message}</p>
      </br>
      <p><em>THIS IS A MESSAGE SENT FROM YOUR PORTFOLIO</em></p>
      <p>Return address: ${email}<p>
    `;

    const transporter = nodeMailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.APP_PASS,
        },
    });

    try {
        const info = await transporter.sendMail({
            from: `${name} <${process.env.USER_EMAIL}>`,
            to: process.env.USER_EMAIL,
            subject: `${subject}`,
            html: emailContent,
        });
        return {
            statusCode: 200,
            body: JSON.stringify({ messageId: info.messageId }),
        };
    } catch (error) {
        return { statusCode: 500, body: error.toString() };
    }
};
