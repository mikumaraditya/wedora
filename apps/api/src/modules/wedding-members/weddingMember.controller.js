import { weddingMemberService } from './weddingMember.service.js';

export class WeddingMemberController {
  constructor(service = weddingMemberService) {
    this.service = service;
  }
}

export const weddingMemberController = new WeddingMemberController();
