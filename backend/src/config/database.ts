import { MongooseModuleOptions } from '@nestjs/mongoose';
import * as process from "process";

export const dataBaseUri: string = process.env.MONGO_URI;

export const mongooseOptions: MongooseModuleOptions = {
    dbName: 'todo-list-app',
    authSource: process.env.MONGO_AUTH_SOURCE,
    user: process.env.MONGO_USERNAME,
    pass: process.env.MONGO_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};