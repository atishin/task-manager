import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';
import { ITask } from 'models/ITask';
import { TasksService } from 'services/tasks.service';
import { IProject } from 'models/types';



@Component({
  selector: 'tm-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit/*, OnChanges*/ {

  public tasks: IProject[] = [];

  // @Input() public newTask: ITask;

  constructor(private taskService: TasksService) { }

  // public ngOnChanges(changes: SimpleChanges) {
  //   if (changes['newTask'] && !changes['newTask'].isFirstChange()) {
  //     this.addTask(changes['newTask'].currentValue);
  //   }
  // }

  public ngOnInit() {
    this.tasks = this.taskService.tasks;
    this.taskService.onTasksChanged.subscribe((projects) => {
      this.tasks = projects;
    });
    console.log(this.tasks);
  }

  // public addTask(task: ITask) {
  //   this.tasks.push(task);
  // }

}
