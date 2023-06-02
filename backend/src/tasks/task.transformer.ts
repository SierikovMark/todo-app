import { TaskDocument } from './entities/task.entity';
import { TaskDto } from './dto/task.dto';

export const mapTaskToDto = (task: TaskDocument): TaskDto => {
    return task.toObject({ transform: transformTask })
};

const transformTask = (doc: any, ret: any): TaskDto => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    delete ret.userId;
    return ret;
}