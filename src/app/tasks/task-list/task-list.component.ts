import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks;
  @Input() completedTasks = [];

  @Output() clearTasksEvent = new EventEmitter();

  
  constructor() { }

  ngOnInit() {
  }

  completedTask(index) {
    this.completedTasks.push(this.tasks[index]);
    this.tasks.splice(index, 1);
  }

  deletedTask(index) {
    this.tasks.splice(index, 1);
  }

  onClearAllTasks(event) {
    this.tasks = [];
    this.clearTasksEvent.emit();
  }

}
