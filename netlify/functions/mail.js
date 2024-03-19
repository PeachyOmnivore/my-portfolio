/* eslint-env node */
const nodeMailer = require('nodemailer');

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
            user: "Lad_777@hotmail.com",
            pass: "kndcrgaxlshdpldr",
        },
    });

    try {
        const info = await transporter.sendMail({
            from: `${name} <Lad_777@hotmail.com>`,
            to: "Lad_777@hotmail.com",
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
