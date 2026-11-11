import { eventService } from './event.service.js';

export class EventController {
  constructor(service = eventService) {
    this.service = service;
  }
}

export const eventController = new EventController();
