import { categoryService } from './category.service.js';

export class CategoryController {
  constructor(service = categoryService) {
    this.service = service;
  }
}

export const categoryController = new CategoryController();
