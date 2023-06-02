import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { User } from "../users/users.decorator";
import { UserDocument } from "../users/entities/user.entity";
import { mapTaskToDto } from "./task.transformer";

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@User() user: UserDocument, @Body() createTaskDto: CreateTaskDto) {
    const newTask = await this.tasksService.create(user.id, createTaskDto);
    return mapTaskToDto(newTask);
  }

  @Get()
  async findAll(@User() user: UserDocument) {
    const tasks = await this.tasksService.findAll(user.id);
    return tasks.map(task => mapTaskToDto(task));
  }

  @Get(':id')
  async findOne(@User() user: UserDocument, @Param('id') id: string) {
    const task = await this.tasksService.findOne(user.id, id);
    return mapTaskToDto(task);
  }

  @Patch(':id')
  async update(@User() user: UserDocument, @Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const task = await this.tasksService.update(user.id, id, updateTaskDto);
    return mapTaskToDto(task);
  }

  @Delete(':id')
  async remove(@User() user: UserDocument, @Param('id') id: string) {
    const task = await this.tasksService.remove(user.id, id);
    return mapTaskToDto(task);
  }

}
