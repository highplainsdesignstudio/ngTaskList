import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent implements OnInit {

  @Input() task;

  constructor() { }

  ngOnInit() {
  }

}
