import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '@chynoorg/data';
import {TodographService} from '../todograph.service'
@Component({
  selector: 'chynoorg-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: []
})
export class TodoComponent implements OnInit {

  todos$ :  Observable<Todo[]>;
  constructor(private todoService: TodographService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.todos$ = this.todoService.getTodos();
     //this.todos$ = of([{ id: 0, title: "Todo 1", description: "desc 1" }, { id: 1, title: "Todo 2", description: "desc 2"  }]);
  }

}
