import { MongooseModuleOptions } from '@nestjs/mongoose';
import * as process from "process";

export const databaseConfig: MongooseModuleOptions = {
    dbName: 'todo-list-app',
    authSource: process.env.MONGO_AUTH_SOURCE,
    user: process.env.MONGO_USERNAME,
    pass: process.env.MONGO_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};