import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input () index;
  @Input () task;
  @Output () completedTask = new EventEmitter();
  @Output () deletedTask = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCompleted() {
    this.completedTask.emit(this.index);
  }

  onDeleted() {
    this.deletedTask.emit(this.index);
  }
}
