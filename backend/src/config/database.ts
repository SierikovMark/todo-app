import { MongooseModuleOptions } from '@nestjs/mongoose';
import * as process from "process";

export const dataBaseUri: string = process.env.MONGO_URI || 'mongodb://localhost:21017';

export const mongooseOptions: MongooseModuleOptions = {
    dbName: process.env.MONGO_TODO_LIST_DB || 'todo-list-app',
    authSource: process.env.MONGO_AUTH_SOURCE || 'admin',
    user: process.env.MONGO_USERNAME,
    pass: process.env.MONGO_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};