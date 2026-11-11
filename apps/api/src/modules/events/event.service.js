import { eventRepository } from './event.repository.js';

export class EventService {
  constructor(repository = eventRepository) {
    this.repository = repository;
  }
}

export const eventService = new EventService();
