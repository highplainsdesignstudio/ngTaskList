import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskComponent } from './tasks/task-list/task/task.component';
import { CompletedTaskListComponent } from './tasks/completed-task-list/completed-task-list.component';
import { CompletedTaskComponent } from './tasks/completed-task-list/completed-task/completed-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskComponent,
    CompletedTaskListComponent,
    CompletedTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
