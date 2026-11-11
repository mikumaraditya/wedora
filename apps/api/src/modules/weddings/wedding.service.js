import { weddingRepository } from './wedding.repository.js';

export class WeddingService {
  constructor(repository = weddingRepository) {
    this.repository = repository;
  }
}

export const weddingService = new WeddingService();
