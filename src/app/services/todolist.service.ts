import { Injectable } from '@angular/core';
@Injectable()
export class ToDoListService {

      
  //State
  todos: string[] = []; //user toDoList
  todoText: string = ''; //user input for todo item

  //Functions
  getTodos(): string[] {
    return this.todos;
  }

  //Events
  addTodo() {
    this.todos.push(this.todoText)
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}