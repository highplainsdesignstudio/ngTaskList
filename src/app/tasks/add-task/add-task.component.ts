import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output () submitTask = new EventEmitter();
  @ViewChild ('f') addTaskForm;

  newTask: string = null;

  constructor() { }

  onSubmit(form: NgForm) {
    if (form.value.newTask !== null) {
      var trimmedTask = form.value.newTask.trim();
      if (trimmedTask !== "") {
        this.newTask = trimmedTask;
        var emitValue = {submitted: this.addTaskForm, form: form};
        this.submitTask.emit(emitValue);
      } else {
      // do nothing
      }
    }
  }
}
