const nodemailer = require("nodemailer");
import { NextResponse } from "next/server";

export async function POST(request) {
    const { email, subject, message } = await request.json();

    console.log(email, subject, message);

    console.log(process.env.OPTIONAL_HOST, process.env.SMTP_HOST, process.env.SMTP_PORT,process.env.EMAIL_USER,process.env.EMAIL_PASS)
    
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
        from: process.env.EMAIL_USER,    // Sender address
        to: email,               // List of recipients
        subject: subject,                // Subject line
        text: message,                   // Plain text body
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return NextResponse.json({ message: "Success!", status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: "Failed!", error: error.toString(), status: 500 });
    }
}

export default POST;


// const { NextResponse } = require("next/server");
// const nodemailer = require("nodemailer");

// export async function POST(request) {
//     const { email, subject, message } = await request.json();
//     const mailRecivers = [
//         'mca@bpl.net',
//         'abdullah.bp.mmd@gmail.com',
//     ];
//     console.log(email);

//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         host: process.env.SMTP_HOST,
//         port: process.env.SMTP_PORT,
//         secure: process.env.SMTP_PORT == 465, // true for port 465, false for other ports
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_APP_PASSWORD,
//         },
//     })
//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: subject,
//         text: message,
//     }

//     try {
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Email sent: ' + info.response);
//         return NextResponse.json({ message: "Success!", status: 200 });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         return NextResponse.json({ message: "Failed!", error: error.toString(), status: 500 });
//     }
// }






