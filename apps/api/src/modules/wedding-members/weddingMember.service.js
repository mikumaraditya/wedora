import { weddingMemberRepository } from './weddingMember.repository.js';

export class WeddingMemberService {
  constructor(repository = weddingMemberRepository) {
    this.repository = repository;
  }
}

export const weddingMemberService = new WeddingMemberService();
