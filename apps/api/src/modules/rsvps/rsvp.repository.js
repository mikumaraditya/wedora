import { RsvpModel } from './rsvp.model.js';

export class RsvpRepository {
  constructor(model = RsvpModel) {
    this.model = model;
  }
}

export const rsvpRepository = new RsvpRepository();
