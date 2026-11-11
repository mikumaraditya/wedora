import { weddingInvitationService } from './weddingInvitation.service.js';

export class WeddingInvitationController {
  constructor(service = weddingInvitationService) {
    this.service = service;
  }
}

export const weddingInvitationController = new WeddingInvitationController();
