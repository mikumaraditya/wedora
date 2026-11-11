import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const VendorModel = mongoose.models.Vendor || mongoose.model('Vendor', vendorSchema);
