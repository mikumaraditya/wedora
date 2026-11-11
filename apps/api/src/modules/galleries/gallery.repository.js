import { GalleryModel } from './gallery.model.js';

export class GalleryRepository {
  constructor(model = GalleryModel) {
    this.model = model;
  }
}

export const galleryRepository = new GalleryRepository();
