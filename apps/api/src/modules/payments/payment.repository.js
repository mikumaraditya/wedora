import { PaymentModel } from './payment.model.js';

export class PaymentRepository {
  constructor(model = PaymentModel) {
    this.model = model;
  }
}

export const paymentRepository = new PaymentRepository();
