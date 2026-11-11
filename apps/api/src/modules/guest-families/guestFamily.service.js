import { guestFamilyRepository } from './guestFamily.repository.js';

export class GuestFamilyService {
  constructor(repository = guestFamilyRepository) {
    this.repository = repository;
  }
}

export const guestFamilyService = new GuestFamilyService();
