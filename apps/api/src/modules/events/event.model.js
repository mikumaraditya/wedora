import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const EventModel = mongoose.models.Event || mongoose.model('Event', eventSchema);
