import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./entities/user.entity";
import * as bcrypt from 'bcrypt';
import { NUMBER_OF_ROUNDS_OR_SALT } from "../config/secrets";

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const { username, password} = createUserDto;
    const user = await this.findOneByUsername(username);
    if (user) {
      throw new BadRequestException('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, NUMBER_OF_ROUNDS_OR_SALT);
    return this.userModel.create({ username, password: hashedPassword });
  }

  async findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  async findOneByUsername(username: string) {
    return this.userModel.findOne({ username }).exec();
  }

}
