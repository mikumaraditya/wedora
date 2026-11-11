import { taskService } from './task.service.js';

export class TaskController {
  constructor(service = taskService) {
    this.service = service;
  }
}

export const taskController = new TaskController();
