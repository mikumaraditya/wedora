import { guestFamilyService } from './guestFamily.service.js';

export class GuestFamilyController {
  constructor(service = guestFamilyService) {
    this.service = service;
  }
}

export const guestFamilyController = new GuestFamilyController();
