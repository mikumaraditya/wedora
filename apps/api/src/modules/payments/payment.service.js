import { paymentRepository } from './payment.repository.js';

export class PaymentService {
  constructor(repository = paymentRepository) {
    this.repository = repository;
  }
}

export const paymentService = new PaymentService();
