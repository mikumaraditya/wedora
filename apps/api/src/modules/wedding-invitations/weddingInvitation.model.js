import mongoose from 'mongoose';

const weddingInvitationSchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const WeddingInvitationModel =
  mongoose.models.WeddingInvitation || mongoose.model('WeddingInvitation', weddingInvitationSchema);
