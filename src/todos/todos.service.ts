import { Todo } from './interfaces/todo.interface';
import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: '1',
      title: 'todos app',
      description: 'Create NestJS todos app',
      done: false,
    },
    {
      id: '2',
      title: 'bread',
      description: 'Buy bread',
      done: true,
    },
    {
      id: '3',
      title: 'wine',
      description: 'Buy wine',
      done: true,
    },
  ];

  findAll() {
    return {
      message: 'La liste des todos a bien été trouvé',
      result: this.todos,
    };
  }

  findById(id: string) {
    let searchedTodo = null;
    this.todos.map((todo) => {
      if (todo.id === id) searchedTodo = todo;
    });
    if (!searchedTodo)
      return { message: `Le todo recherché n'existe pas`, result: null };
    return { message: `Le todo ${id} a bien été trouvé`, result: searchedTodo };
  }

  create(todo: CreateTodoDto) {
    this.todos = [...this.todos, todo as Todo];
    return {
      message: todo
        ? 'Un élément a bien été rajouté à la todolist'
        : "Impossible d'ajouter ce todo",
      result: todo ? todo : null,
    };
  }

  update(id: string, todo: Todo): { message: string; result: Todo[] } {
    //retrieve the todo to update
    const todoToUpdate = this.todos.find((t) => t.id === id);
    console.log('todo to update is ', todoToUpdate);
    //modifications
    if (!todoToUpdate)
      return {
        message: `Aucun todo avec l\'id ${id} n'a été trouvé`,
        result: null,
      };
    if (todo.hasOwnProperty('done')) {
      todoToUpdate.done = todo.done;
    }
    if (todo.title) {
      todoToUpdate.title = todo.title;
    }
    if (todo.description) {
      todoToUpdate.description = todo.description;
    }
    const updatedTodos = this.todos.map((t) =>
      t.id !== id ? t : todoToUpdate,
    );
    this.todos = [...updatedTodos];
    return { message: 'Le todo a bien été mis à jour', result: this.todos };
  }

  removeById(id: string): { message: string; result: Todo[] } {
    const indexToDelete: number = this.todos.findIndex((t) => t.id === id);
    let message: string;
    if (indexToDelete > -1) this.todos.splice(indexToDelete, 1);
    indexToDelete > -1
      ? (message = `L'item avec l'identifiant ${id} a bien été supprimé.`)
      : (message = "Aucun item avec cet identifiant n'a été trouvé");
    return {
      message: message,
      result: this.todos,
    };
  }
}
