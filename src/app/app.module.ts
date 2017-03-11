import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ValueProvider, ClassProvider, FactoryProvider} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

import { TasksService } from './services/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    <ClassProvider>{provide: TasksService, useClass: TasksService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
