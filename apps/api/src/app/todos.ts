import { Express } from 'express';
import { Todo } from '@chynoorg/data';


const todos: Todo[] = [{ title: "Todo 1", description:"descp1" }, { title: "Todo 2",  description:"descp 2" },  { title: "Todo 3", description:"descp3" }];

export function addTodoRoutes(app: Express) {
  app.get('/api/todos', (req, resp) => resp.send(todos));
  app.post('/api/addTodo', (req, resp) => {
    const newTodo = {
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    };
    todos.push(newTodo);
    resp.send(newTodo);
  });
}
