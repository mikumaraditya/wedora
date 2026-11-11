import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const CategoryModel = mongoose.models.Category || mongoose.model('Category', categorySchema);
