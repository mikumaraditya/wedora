import { expenseRepository } from './expense.repository.js';

export class ExpenseService {
  constructor(repository = expenseRepository) {
    this.repository = repository;
  }
}

export const expenseService = new ExpenseService();
