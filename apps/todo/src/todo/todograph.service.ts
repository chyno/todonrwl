import { Injectable } from '@angular/core';
import { Todo } from '@chynoorg/data';
import { Observable, of } from 'rxjs';
import {  map, tap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const AllTodos = gql`
 query {
  allTodos {
    id
    title
    description
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class TodographService {
  private todos: Todo[];
  constructor(private apollo: Apollo) {
     //this.todos = [{ id: 0, title: "Todo 1", description: "desc 1" }, { id: 1, title: "Todo 2", description: "desc 2"  }];

   }

  public getTodos() :  Observable<Todo[]> {
    return this.apollo.query<{allTodos : Todo[]}>({
      query: AllTodos
    }).pipe(
      map(x => x.data.allTodos)
      , tap (y => console.log('data value: ' + y))
      );
  }

  public addTodo(todo : Todo) {
    //return this.todos.push(todo);
    return;
  }
}
