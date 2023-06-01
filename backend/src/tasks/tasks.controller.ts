import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { User } from "../users/users.decorator";
import { UserDocument } from "../users/entities/user.entity";

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@User() user: UserDocument, @Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(user.id, createTaskDto);
  }

  @Get()
  findAll(@User() user: UserDocument) {
    return this.tasksService.findAll(user.id);
  }

  @Get(':id')
  findOne(@User() user: UserDocument, @Param('id') id: string) {
    return this.tasksService.findOne(user.id, id);
  }

  @Patch(':id')
  update(@User() user: UserDocument, @Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(user.id, id, updateTaskDto);
  }

  @Delete(':id')
  remove(@User() user: UserDocument, @Param('id') id: string) {
    return this.tasksService.remove(user.id, id);
  }
}
