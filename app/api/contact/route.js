// pages/api/contact.js
import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Requisition from '@/models/Requisition';
import { generateToken } from '@/utils/token';
import sendEmail from '@/app/api/sendEmail/sendEmail';

export async function POST(request) {
  await dbConnect();

  try {
    const { email, subject, message } = await request.json();
    const token = generateToken();
    const tokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000); // Token valid for 24 hours

    const newRequisition = new Requisition({
      email,
      subject,
      message,
      token,
      tokenExpiry,
    });

    await newRequisition.save();

    const emailDetails = {
      email,
      subject,
      message,
      token: newRequisition.token,
    };

    const emailResponse = await sendEmail(emailDetails);

    if (emailResponse.status !== 200) {
      return NextResponse.json({ message: "Requisition submitted but email sending failed", error: emailResponse.error }, { status: 500 });
    }

    return NextResponse.json({ message: "Requisition submitted and email sent successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to process the request", error: error.toString() }, { status: 500 });
  }
}
