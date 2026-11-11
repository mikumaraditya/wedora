import { WeddingModel } from './wedding.model.js';

export class WeddingRepository {
  constructor(model = WeddingModel) {
    this.model = model;
  }
}

export const weddingRepository = new WeddingRepository();
