import { ExpenseModel } from './expense.model.js';

export class ExpenseRepository {
  constructor(model = ExpenseModel) {
    this.model = model;
  }
}

export const expenseRepository = new ExpenseRepository();
