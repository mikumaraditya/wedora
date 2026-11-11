import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const UserModel = mongoose.models.User || mongoose.model('User', userSchema);
