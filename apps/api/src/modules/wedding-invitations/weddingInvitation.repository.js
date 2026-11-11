import { WeddingInvitationModel } from './weddingInvitation.model.js';

export class WeddingInvitationRepository {
  constructor(model = WeddingInvitationModel) {
    this.model = model;
  }
}

export const weddingInvitationRepository = new WeddingInvitationRepository();
