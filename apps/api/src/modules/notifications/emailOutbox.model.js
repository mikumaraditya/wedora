import mongoose from 'mongoose';

const emailOutboxSchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const EmailOutboxModel =
  mongoose.models.EmailOutbox || mongoose.model('EmailOutbox', emailOutboxSchema);
