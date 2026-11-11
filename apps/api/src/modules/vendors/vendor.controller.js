import { vendorService } from './vendor.service.js';

export class VendorController {
  constructor(service = vendorService) {
    this.service = service;
  }
}

export const vendorController = new VendorController();
