import { galleryService } from './gallery.service.js';

export class GalleryController {
  constructor(service = galleryService) {
    this.service = service;
  }
}

export const galleryController = new GalleryController();
