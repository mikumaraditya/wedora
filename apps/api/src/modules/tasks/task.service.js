import { taskRepository } from './task.repository.js';

export class TaskService {
  constructor(repository = taskRepository) {
    this.repository = repository;
  }
}

export const taskService = new TaskService();
