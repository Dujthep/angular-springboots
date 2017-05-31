import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

import { EmployeeModal } from './modal.component';

@Component({
  selector: 'app-todo-list',
  template: `
  <app-add-todo [modal]="selectedEmployee"></app-add-todo>
  <ol>
  <li *ngFor="let todo of this.todoService.todos" (dblclick)="getEmployee(todo)">
   {{todo.firstName}} {{todo.lastName}}
  </li></ol>`
})
export class ListTodoComponent implements OnInit {
  selectedEmployee : EmployeeModal
  constructor(private todoService: TodoService) { }
  ngOnInit() {
    this.todoService.getTodos().then(todos => this.todoService.todos = todos);
  }
  getEmployee(todo) {
    this.selectedEmployee = todo;
    //this.todoService.modal = todo;
  }
}
