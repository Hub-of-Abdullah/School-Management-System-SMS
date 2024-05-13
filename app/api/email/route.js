const { NextResponse } = require("next/server");
const nodemailer = require("nodemailer");

export async function POST(request) {
    const { email, message } = await request.json();
    const mailRecivers = [
        'mkd@bpl.net',
        'mca@bpl.net',
        'abdullah.bp.mmd@gmail.com',
    ];
    console.log(email);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_FROM,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    })
    const mailOptions = {
        from: process.env.GMAIL_FROM,
        to: mailRecivers,
        subject: `Message from (${email})`,
        text: message,
    }

    // const transporter = nodemailer.createTransport({
    //     host: process.env.WEB_HOST, // SMTP server address (usually mail.your-domain.com) // mail.beximcopharma.net
    //     port: 465, // Port for SMTP (usually 465)
    //     secure: true, // Usually true if connecting to port 465
    //     auth: {
    //         user: process.env.GMAIL_FROM, //"***-example-person@gmail.com", // Your email address // knowledgecenter@beximcopharma.net
    //         pass: process.env.GMAIL_APP_PASSWORD, // Password (for gmail, your app password)// (Jy1GZBR2U@c
    //         // For better security, use environment variables set on the server for these values when deploying
    //     },
    // });

    // const mailOptions = await transporter.sendMail({
    //     from: process.env.GMAIL_FROM, // knowledgecenter@beximcopharma.net
    //     to: mailRecivers, // [email, 'abdullah.bp.mmd@gmail.com'],
    //     subject: `Message from (${email})`,
    //     text: message,
    // });


    try {
        // await transporter.sendMail(mailOptions);
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log(err);
                res.send("error" + JSON.stringify(err));
            } else {
                console.log("mail send");
                res.send("success");
            }
        });
        return NextResponse.json({ message: "Success!", status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Failed!", status: 500 });
    }
}







