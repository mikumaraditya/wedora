import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const PaymentModel = mongoose.models.Payment || mongoose.model('Payment', paymentSchema);
