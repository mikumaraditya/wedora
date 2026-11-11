import { EventModel } from './event.model.js';

export class EventRepository {
  constructor(model = EventModel) {
    this.model = model;
  }
}

export const eventRepository = new EventRepository();
