import { CategoryModel } from './category.model.js';

export class CategoryRepository {
  constructor(model = CategoryModel) {
    this.model = model;
  }
}

export const categoryRepository = new CategoryRepository();
