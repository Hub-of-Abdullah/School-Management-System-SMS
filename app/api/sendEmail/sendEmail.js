// const nodemailer = require("nodemailer");

// const sendEmail = async ({ mailReceivers, subject, message, htmlContent }) => {
//     // Create a transporter object using SMTP transport
//     let transporter = nodemailer.createTransport({
//         name: process.env.OPTIONAL_HOST,
//         host: process.env.SMTP_HOST,
//         port: process.env.SMTP_PORT,
//         secure: process.env.SMTP_PORT == 465, // true for port 465, false for other ports
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS
//         }
//     });

//     let mailOptions = {
//         from: process.env.EMAIL_USER, // Sender address
//         to: mailReceivers,                    // List of recipients
//         subject: subject,             // Subject line
//         text: 'That was easy!',
//         html: htmlContent
//     };

//     try {
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Email sent: ' + info.response);
//         return { message: "Success!", status: 200 };
//     } catch (error) {
//         console.error('Error sending email:', error);
//         return { message: "Failed!", error: error.toString(), status: 500 };
//     }
// };

// module.exports = sendEmail;



const nodemailer = require("nodemailer");

const sendEmail = async ({ mailReceivers, subject, htmlContent }) => {

    console.log(htmlContent)
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_PORT == 465, // true for port 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    })

    let mailOptions = {
        from: process.env.EMAIL_USER, // Sender address
        to: mailReceivers,                    // List of recipients
        subject: subject,             // Subject line
        text: 'That was easy00000000000!',
        html: htmlContent
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



