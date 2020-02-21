import { Injectable } from '@angular/core';
import {Todo} from '../todo';
//import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[];
  constructor() {
     this.todos = [{ title: "Todo 1"}, { title: "Todo 2" }];

   }

  public getTodos() :  Observable<Todo[]> {
    //return this.http.get<Todo[]>('/api/todos');
    return of(this.todos);
  }

  public addTodo(todo : Todo) {
    return this.todos.push(todo);
  }
}
