import { galleryRepository } from './gallery.repository.js';

export class GalleryService {
  constructor(repository = galleryRepository) {
    this.repository = repository;
  }
}

export const galleryService = new GalleryService();
