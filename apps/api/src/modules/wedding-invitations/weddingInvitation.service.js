import { weddingInvitationRepository } from './weddingInvitation.repository.js';

export class WeddingInvitationService {
  constructor(repository = weddingInvitationRepository) {
    this.repository = repository;
  }
}

export const weddingInvitationService = new WeddingInvitationService();
