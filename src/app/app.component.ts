import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ITask } from 'models/ITask';

@Component({
  selector: 'tm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public addedTask: ITask = null;

  constructor() {}

  public taskCreated(task) {
    console.log(task);
    this.addedTask = task;
  }

}
