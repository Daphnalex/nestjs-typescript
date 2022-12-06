import { TodosService } from './todos.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

//localhost:3000/todos
@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findById(id);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Post()
  createTodo(@Body() newTodo: CreateTodoDto) {
    return this.todoService.create(newTodo);
  }

  @Put(':id')
  updateTodo(@Param('id') id: string, @Body() todo: CreateTodoDto) {
    return this.todoService.update(id, todo);
  }

  @Delete(':id')
  removeTodo(@Param('id') id: string) {
    return this.todoService.removeById(id);
  }
}
