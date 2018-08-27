import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskList: string[] = [];
  completedTaskList: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  onClearAllTasks() {
    this.taskList = [];
  }

  onSubmit(event) {
    this.taskList.push(event.submitted.value.newTask);
    event.form.reset();
  }
}
