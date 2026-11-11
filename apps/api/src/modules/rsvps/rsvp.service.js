import { rsvpRepository } from './rsvp.repository.js';

export class RsvpService {
  constructor(repository = rsvpRepository) {
    this.repository = repository;
  }
}

export const rsvpService = new RsvpService();
