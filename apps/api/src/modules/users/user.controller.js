import { userService } from './user.service.js';

export class UserController {
  constructor(service = userService) {
    this.service = service;
  }
}

export const userController = new UserController();
