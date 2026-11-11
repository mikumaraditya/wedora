import { vendorRepository } from './vendor.repository.js';

export class VendorService {
  constructor(repository = vendorRepository) {
    this.repository = repository;
  }
}

export const vendorService = new VendorService();
