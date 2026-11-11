import { VendorModel } from './vendor.model.js';

export class VendorRepository {
  constructor(model = VendorModel) {
    this.model = model;
  }
}

export const vendorRepository = new VendorRepository();
