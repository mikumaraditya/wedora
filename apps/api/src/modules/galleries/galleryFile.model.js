import mongoose from 'mongoose';

const galleryFileSchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const GalleryFileModel =
  mongoose.models.GalleryFile || mongoose.model('GalleryFile', galleryFileSchema);
