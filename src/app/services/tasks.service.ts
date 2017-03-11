import { Injectable, EventEmitter } from '@angular/core';
import { ITask } from 'models/ITask';
import { Http, URLSearchParams } from '@angular/http';
import { IProject } from 'models/types';


@Injectable()
export class TasksService {

  private _tasks: IProject[];
  public onTasksChanged = new EventEmitter<IProject[]>();

  constructor(private http: Http) {
    this.init();
  }

  private async init() {

    const promise = this.http.get('http://tas.ddnsfree.com:40010/odata/Projects')
      .toPromise()
      .then(r => r.json());
    const res = await promise;
    this.tasks = res.value;
  }

  public get tasks() {
    return this._tasks;
  }
  public set tasks(value) {
    this._tasks = value;
    this.onTasksChanged.emit(this._tasks);
  }

  public addTask(task: IProject) {
    this._tasks.push(task);
  }

}
