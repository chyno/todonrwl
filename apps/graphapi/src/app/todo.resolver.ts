// apps/api/src/app/set.resolver.ts

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from '@chynoorg/data';

const todos: Todo[] = [{id:1, title: "Todo 1", description:"grph todo 1" }, {id:2, title: "Todo 2",  description:"descp 2" },  { id:3, title: "Todo 3", description:"descp3" }];

@Resolver('Todo')
export class TodoResolver {
  @Query('allTodos')
  getAllSets(): Todo[] {
    return todos;
  }

  @Mutation()
  addTodo(
    @Args('name') name: string,
    @Args('year') year: string,
    @Args('numParts') numParts: number
  ) {
    const newTodo : Todo = {id: 99, title: "New todo", description:"grph todo 1" };

    todos.push(newTodo);

    return newTodo;
  }
}
