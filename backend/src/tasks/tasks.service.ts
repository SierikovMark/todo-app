import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from "mongoose";
import { Task, TaskDocument } from "./entities/task.entity";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class TasksService {

  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  create(createTaskDto: CreateTaskDto) {
    const task = new this.taskModel(createTaskDto)
    return task.save();
  }

  findAll() {
    return this.taskModel.find().exec();
  }

  findOne(id: string) {
    return this.taskModel.findById(id).exec();
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, updateTaskDto, {new: true}).exec();
  }

  remove(id: string) {
    return this.taskModel.findByIdAndRemove(id).exec();
  }
}
