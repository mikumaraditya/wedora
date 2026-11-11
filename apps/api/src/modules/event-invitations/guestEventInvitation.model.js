import mongoose from 'mongoose';

const guestEventInvitationSchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const GuestEventInvitationModel =
  mongoose.models.GuestEventInvitation ||
  mongoose.model('GuestEventInvitation', guestEventInvitationSchema);
