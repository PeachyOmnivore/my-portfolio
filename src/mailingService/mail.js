import nodeMailer from "nodemailer";

export default async function sendMail(senderName, subject, title, email, message) {
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

    const info = await transporter.sendMail({
        from: `${senderName} <Lad_777@hotmail.com>`,
        to: "Lad_777@hotmail.com",
        subject: `${subject}`,
        html: emailContent,
    });

    console.log("Message sent:" + info.messageId);
}