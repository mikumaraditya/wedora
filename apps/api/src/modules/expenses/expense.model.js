import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({}, { timestamps: true, strict: false });

export const ExpenseModel = mongoose.models.Expense || mongoose.model('Expense', expenseSchema);
