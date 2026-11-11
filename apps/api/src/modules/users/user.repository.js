import { UserModel } from './user.model.js';

export class UserRepository {
  constructor(model = UserModel) {
    this.model = model;
  }
}

export const userRepository = new UserRepository();
