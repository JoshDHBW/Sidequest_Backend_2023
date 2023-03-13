import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SidequestDocument = Sidequest & Document;

@Schema()
export class Sidequest {
  @Prop()
  status: string;

  @Prop()
  negotiable: boolean;

  @Prop()
  date: Date;

  @Prop()
  deadline: Date;

  @Prop()
  title: string;
  
  @Prop()
  description: string;
 
  @Prop()
  location: [];

  @Prop()
  author_id: string;

  @Prop()
  customer_id: string;
}

export const SidequestSchema = SchemaFactory.createForClass(Sidequest);