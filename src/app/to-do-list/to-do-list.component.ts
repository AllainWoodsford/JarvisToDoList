import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { ToDoListService } from '../services/todolist.service';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  constructor(private _toDoListService: ToDoListService){}

  public get todos():string[]{
    return this._toDoListService.getTodos();
  }
}
