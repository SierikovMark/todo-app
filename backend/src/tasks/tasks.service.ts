import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model, Types } from "mongoose";
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

  async findOne(userId: string, id: string) {
    this.verifyId(id);
    const task = await this.taskModel.findOne({ _id: id, userId }).exec();
    this.verifyTaskIsNotNull(task, id);
    return task;
  }

  async update(userId: string, id: string, updateTaskDto: UpdateTaskDto) {
    this.verifyId(id);
    const updatedTask = await this.taskModel
        .findOneAndUpdate({ _id: id, userId }, updateTaskDto, {new: false}).exec();
    this.verifyTaskIsNotNull(updatedTask, id);
    return updatedTask;
  }

  async remove(userId: string, id: string) {
    this.verifyId(id);
    const removedTask = await this.taskModel.findOneAndRemove({ _id: id, userId }).exec();
    this.verifyTaskIsNotNull(removedTask, id);
    return removedTask;
  }

  private verifyTaskIsNotNull(task: TaskDocument, taskId: string){
    if (task == null) {
      throw new NotFoundException(`No such task: ${taskId}`)
    }
  }

  private verifyId(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ObjectId');
    }
  }
}
