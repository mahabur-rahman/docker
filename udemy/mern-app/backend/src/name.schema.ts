import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NameDocument = Name & Document;

@Schema()
export class Name {
  @Prop({ required: true })
  name: string;
}

export const NameSchema = SchemaFactory.createForClass(Name);
