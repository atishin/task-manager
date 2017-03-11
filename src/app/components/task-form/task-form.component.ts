import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ITask } from 'models/ITask';
import { TasksService } from 'services/tasks.service';
import { IProject } from 'models/types';

@Component({
  selector: 'tm-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  public newTask = '';

  @Output() public onTaskCreated = new EventEmitter<IProject>();

  constructor(private taskService: TasksService) { }

  public ngOnInit() {  }

  public addTask() {
    const task: IProject = {
      Title: this.newTask,
      checked: false
    };
    this.onTaskCreated.emit(task);
    this.taskService.addTask(task);
  }

}
