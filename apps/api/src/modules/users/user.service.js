import { userRepository } from './user.repository.js';

export class UserService {
  constructor(repository = userRepository) {
    this.repository = repository;
  }
}

export const userService = new UserService();
