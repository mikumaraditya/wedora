import mongoose from 'mongoose';

const guestFamilySchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const GuestFamilyModel =
  mongoose.models.GuestFamily || mongoose.model('GuestFamily', guestFamilySchema);
