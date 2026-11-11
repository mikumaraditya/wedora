import mongoose from 'mongoose';

const rsvpSchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const RsvpModel = mongoose.models.Rsvp || mongoose.model('Rsvp', rsvpSchema);
