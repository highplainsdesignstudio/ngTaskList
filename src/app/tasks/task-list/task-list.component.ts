import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks;
  @Output() clearTasks = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClearAllTasks(event) {
    this.tasks = [];
    this.clearTasks.emit();
  }

}
