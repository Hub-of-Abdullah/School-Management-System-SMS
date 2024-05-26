// models/Requisition.js
import mongoose from 'mongoose';
import crypto from 'crypto';

const RequisitionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  token: {
    type: String,
    unique: true,
  },
  tokenExpiry: {
    type: Date,
  },
}, { timestamps: true });

export default mongoose.models.Requisition || mongoose.model('Requisition', RequisitionSchema);
