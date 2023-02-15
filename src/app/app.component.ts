import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jarvis';

  
  //State
  todos: string[] = [];
  todoText: string = '';

  //Events
  addTodo() {
    this.todos.push(this.todoText)
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
