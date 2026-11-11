import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const TaskModel = mongoose.models.Task || mongoose.model('Task', taskSchema);
