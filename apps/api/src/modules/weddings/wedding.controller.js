import { weddingService } from './wedding.service.js';

export class WeddingController {
  constructor(service = weddingService) {
    this.service = service;
  }
}

export const weddingController = new WeddingController();
