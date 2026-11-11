import { guestEventInvitationService } from './guestEventInvitation.service.js';

export class GuestEventInvitationController {
  constructor(service = guestEventInvitationService) {
    this.service = service;
  }
}

export const guestEventInvitationController = new GuestEventInvitationController();
