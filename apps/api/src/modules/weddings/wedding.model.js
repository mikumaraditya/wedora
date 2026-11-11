import mongoose from 'mongoose';

const weddingSchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const WeddingModel = mongoose.models.Wedding || mongoose.model('Wedding', weddingSchema);
