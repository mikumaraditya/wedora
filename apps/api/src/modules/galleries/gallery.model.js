import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const GalleryModel = mongoose.models.Gallery || mongoose.model('Gallery', gallerySchema);
