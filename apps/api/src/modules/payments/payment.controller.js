import { paymentService } from './payment.service.js';

export class PaymentController {
  constructor(service = paymentService) {
    this.service = service;
  }
}

export const paymentController = new PaymentController();
