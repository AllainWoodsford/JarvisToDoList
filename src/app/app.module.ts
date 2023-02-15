import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  //State
  todos: string[] = [];
  todoText: string = '';

  //Events
  addTodo() {
    this.todos.push(this.todoText)
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
