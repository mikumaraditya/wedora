import { emailOutboxRepository } from './emailOutbox.repository.js';

export class EmailOutboxService {
  constructor(repository = emailOutboxRepository) {
    this.repository = repository;
  }
}

export const emailOutboxService = new EmailOutboxService();
