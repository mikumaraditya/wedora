import { EmailOutboxModel } from './emailOutbox.model.js';

export class EmailOutboxRepository {
  constructor(model = EmailOutboxModel) {
    this.model = model;
  }
}

export const emailOutboxRepository = new EmailOutboxRepository();
