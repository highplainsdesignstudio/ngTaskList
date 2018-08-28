import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent implements OnInit {

  @Input() index;
  @Input() task;

  @Output() deleteCompletedTask = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDeleted() {
    this.deleteCompletedTask.emit(this.index);
  }

}
