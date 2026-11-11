import { GuestFamilyModel } from './guestFamily.model.js';

export class GuestFamilyRepository {
  constructor(model = GuestFamilyModel) {
    this.model = model;
  }
}

export const guestFamilyRepository = new GuestFamilyRepository();
