import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Todo } from '@chynoorg/data';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
    }

  public getTodos() :  Observable<Todo[]> {
    return this.http.get<Todo[]>('/api/todos');

    //return of(this.todos);
  }

  public addTodo(todo : Todo) {
    // return this.todos.push(todo);
  }
}
