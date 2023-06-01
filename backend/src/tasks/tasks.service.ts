import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from "mongoose";
import { Task, TaskDocument } from "./entities/task.entity";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class TasksService {

  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  create(userId: string, createTaskDto: CreateTaskDto) {
    const task = new this.taskModel({ ...createTaskDto, userId });
    return task.save();
  }

  findAll(userId: string) {
    return this.taskModel.find({ userId }).exec();
  }

  findOne(userId: string, id: string) {
    return this.taskModel.findOne({ _id: id, userId }).exec();
  }

  update(userId: string, id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskModel.findOneAndUpdate({ _id: id, userId }, updateTaskDto, {new: false}).exec();
  }

  remove(userId: string, id: string) {
    return this.taskModel.findOneAndRemove({ _id: id, userId }).exec();
  }
}
