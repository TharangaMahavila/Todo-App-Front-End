import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {Priority} from '../util/priority.enum';

@Injectable()
export class TaskService {
  taskList: Array<Task> = [];

  constructor() {
    this.taskList.push(new Task('Reqirement Elicitation', true, Priority.PRIORITY1));
    this.taskList.push(new Task('Design UI', false, Priority.PRIORITY1));
    this.taskList.push(new Task('Back end Code implement', false, Priority.PRIORITY2));
  }
}
