import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListTodoComponent } from './listData.component';
import { AddTodoComponent } from './addData.component';

import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    ListTodoComponent,
    AddTodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }