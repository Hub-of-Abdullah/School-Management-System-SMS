import { NextResponse } from "next/server";
import sendEmail from "@/app/api/sendEmail/sendEmail"; // Adjust the path according to your project structure
import { adminEmailTemplate } from '@/app/api/emailTemplate/adminEmailTemplate';

export async function POST(request) {
    try {
        const { email, subject, message } = await request.json();
        const htmlContent = adminEmailTemplate(subject, message);
        const mailReceivers = [email, process.env.HR_EMAIL];

        const emailDetails = { mailReceivers, subject, message, htmlContent };

        console.log(emailDetails);

        const emailResponse = await sendEmail(emailDetails);

        if (emailResponse.status !== 200) {
            return new NextResponse(JSON.stringify({ message: "Requisition submitted but email sending failed", error: emailResponse.error }), { status: 500 });
        }

        return new NextResponse(JSON.stringify({ message: "Requisition submitted and email sent successfully" }), { status: 200 });
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "Failed to process the request", error: error.toString() }), { status: 500 });
    }
}


