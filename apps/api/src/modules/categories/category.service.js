import { categoryRepository } from './category.repository.js';

export class CategoryService {
  constructor(repository = categoryRepository) {
    this.repository = repository;
  }
}

export const categoryService = new CategoryService();
