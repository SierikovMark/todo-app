import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Prop({ required: true  })
    title: string;

    @Prop()
    description: string;

    @Prop({ default: false })
    completed: boolean;

    @Prop({ required: true  })
    userId: string;

    @Prop({ required: true  })
    createdAt: Date

    @Prop({ required: true  })
    updatedAt: Date
}

export const TaskSchema = SchemaFactory.createForClass(Task);
