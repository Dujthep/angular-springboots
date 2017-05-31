import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  todos: Todo[] = [];
  modal : Todo = {id:"",firstName:"",lastName:""};
  constructor(private http: Http) {
    console.log('this service');
    this.getTodos().then(todos => this.todos = todos);
  }
  getTodos(): Promise<Todo[]> {
    return this.http.get(`/get_data`)
      .toPromise()
      .then(response => this.todos =  response.json())
      .catch(() => console.log('error'));
  }
  createTodo(modal: Todo) {
    if(modal.id != ''){
      this.http.put(`/edit_data/${modal.id}`,
        JSON.stringify({ id: modal.id, firstName: modal.firstName,lastName : modal.lastName }),
        {headers: new Headers({ 'Content-Type': 'application/json' }) }
      )
      .toPromise()
      .then(() => this.getTodos().then(value => this.todos = value))
      .catch(() => console.log('error'));
    }else{
      this.http.post(`/post_add`,
        JSON.stringify({ id: modal.id, firstName: modal.firstName,lastName : modal.lastName }),
        {headers: new Headers({ 'Content-Type': 'application/json' }) }
      )
      .toPromise()
      .then(() => this.getTodos().then(value => this.todos = value))
      .catch(() => console.log('error'));
    }
  }
  removeTodo(modal: Todo) {
    this.http.delete(`/delete_data/${modal.id}`)
      .toPromise()
      .then(() => this.getTodos().then(value => this.todos = value))
      .catch(() => console.log('error'))
  }
  searchEmployee(modal: Todo){
    this.http.post(`/search_data`,
        JSON.stringify({ id: modal.id, firstName: modal.firstName,lastName : modal.lastName }),
        {headers: new Headers({ 'Content-Type': 'application/json' }) }
      )
      .toPromise()
      .then(response => this.todos =  response.json())
      .catch(() => console.log('error'));
    }
}
class Todo {
  id: string;
  firstName: string;
  lastName:String;
}
