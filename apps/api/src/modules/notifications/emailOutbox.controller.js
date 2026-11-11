import { emailOutboxService } from './emailOutbox.service.js';

export class EmailOutboxController {
  constructor(service = emailOutboxService) {
    this.service = service;
  }
}

export const emailOutboxController = new EmailOutboxController();
