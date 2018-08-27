import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-completed-task-list',
  templateUrl: './completed-task-list.component.html',
  styleUrls: ['./completed-task-list.component.css']
})
export class CompletedTaskListComponent implements OnInit {

  @Input() completedTasks;

  constructor() { }

  ngOnInit() {
  }

}
