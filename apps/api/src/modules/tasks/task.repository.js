import { TaskModel } from './task.model.js';

export class TaskRepository {
  constructor(model = TaskModel) {
    this.model = model;
  }
}

export const taskRepository = new TaskRepository();
