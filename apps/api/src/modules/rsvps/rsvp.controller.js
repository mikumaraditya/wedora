import { rsvpService } from './rsvp.service.js';

export class RsvpController {
  constructor(service = rsvpService) {
    this.service = service;
  }
}

export const rsvpController = new RsvpController();
