import mongoose from 'mongoose';

const weddingMemberSchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const WeddingMemberModel =
  mongoose.models.WeddingMember || mongoose.model('WeddingMember', weddingMemberSchema);
