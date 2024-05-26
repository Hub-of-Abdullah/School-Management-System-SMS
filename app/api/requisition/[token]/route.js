// pages/api/requisition/[token].js
import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Requisition from '@/models/Requisition';

export async function GET(req, { params }) {
  await dbConnect();

  const { token } = params;

  console.log('Token from params:', token);
  const requisition = await Requisition.findOne({ token, tokenExpiry: { $gte: Date.now() } });

  if (!requisition) {
    return NextResponse.json({ message: 'Invalid or expired token' }, { status: 400 });
  }

  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');

  if (action === 'approve') {
    requisition.status = 'approved';
    requisition.token = null; // Invalidate token
    requisition.tokenExpiry = null; // Invalidate tokenExpiry
  } else if (action === 'reject') {
    requisition.status = 'rejected';
    requisition.token = null; // Invalidate token
    requisition.tokenExpiry = null; // Invalidate tokenExpiry
  } else {
    return NextResponse.json({ message: 'Invalid action' }, { status: 400 });
  }

  await requisition.save();
  return NextResponse.json({ message: `Requisition ${action}d successfully` }, { status: 200 });
}
