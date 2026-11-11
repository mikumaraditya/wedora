import { guestEventInvitationRepository } from './guestEventInvitation.repository.js';

export class GuestEventInvitationService {
  constructor(repository = guestEventInvitationRepository) {
    this.repository = repository;
  }
}

export const guestEventInvitationService = new GuestEventInvitationService();
