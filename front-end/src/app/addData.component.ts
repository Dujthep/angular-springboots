import { Component,Input } from '@angular/core';
import { TodoService } from './todo.service';
import { EmployeeModal } from './modal.component';
@Component({
  selector: 'app-add-todo',
  template: `
  <div *ngIf="modal">
    <input type="text" name="firstName" placeholder="First Name"
      [value]="modal.firstName" (input)="this.todoService.modal.firstName=$event.target.value">
    <input type="text" name="lastName" placeholder="Last Name" [(ngModel)]="this.todoService.modal.lastName">
  </div>
  <div *ngIf="!modal">
    <input type="text" name="firstName" placeholder="First Name"
      (input)="this.todoService.modal.firstName=$event.target.value">
    <input type="text" name="lastName" placeholder="Last Name" [(ngModel)]="this.todoService.modal.lastName">
  </div>

  <button (click)="createTodo()" > Add </button>
  <button (click)="searchEmployee()" > Search </button>
  <button (click)="deleteEmployee()" > Delete </button>
  `
})
export class AddTodoComponent {
  @Input() modal : EmployeeModal;
  firstName = '';
  lastName = '';
  constructor(private todoService: TodoService) { }
  createTodo() {
      console.log(this.todoService);
    //this.todoService.createTodo(this.todoService.modal)
  }
  searchEmployee(){
    this.todoService.searchEmployee(this.todoService.modal);
  }
  deleteEmployee(){
    this.todoService.removeTodo(this.todoService.modal);
  }
}

