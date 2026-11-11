import { GuestEventInvitationModel } from './guestEventInvitation.model.js';

export class GuestEventInvitationRepository {
  constructor(model = GuestEventInvitationModel) {
    this.model = model;
  }
}

export const guestEventInvitationRepository = new GuestEventInvitationRepository();
