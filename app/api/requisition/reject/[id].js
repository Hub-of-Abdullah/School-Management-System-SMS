// pages/api/requisition/reject/[id].js
import Requisition from '@/models/Requisition';
import dbConnect from '@/utils/dbConnect';

export default async function handler(req, res) {
  const { token } = req.query;

  await dbConnect();

  const requisition = await Requisition.findOne(token);

  if (!requisition || requisition.token !== token || new Date() > requisition.tokenExpiry) {
    return res.status(400).json({ message: 'Invalid or expired token' });
  }

  requisition.status = 'rejected';
  requisition.token = null; // Invalidate token
  await requisition.save();

  res.status(200).json({ message: 'Requisition rejected' });
}