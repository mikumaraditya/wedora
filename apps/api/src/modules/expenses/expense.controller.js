import { expenseService } from './expense.service.js';

export class ExpenseController {
  constructor(service = expenseService) {
    this.service = service;
  }
}

export const expenseController = new ExpenseController();
