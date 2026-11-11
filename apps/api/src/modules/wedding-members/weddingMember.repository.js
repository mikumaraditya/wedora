import { WeddingMemberModel } from './weddingMember.model.js';

export class WeddingMemberRepository {
  constructor(model = WeddingMemberModel) {
    this.model = model;
  }
}

export const weddingMemberRepository = new WeddingMemberRepository();
