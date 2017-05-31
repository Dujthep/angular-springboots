import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{appName}}</h1>
  <app-todo-list></app-todo-list>
  `
})
export class AppComponent {
  appName = 'Todo List!!!';
}
