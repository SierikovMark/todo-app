import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { databaseConfig } from "./config/database";
import { TasksModule } from './tasks/tasks.module';
import process from "process";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, databaseConfig),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
