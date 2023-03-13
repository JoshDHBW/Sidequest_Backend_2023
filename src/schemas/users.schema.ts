import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail } from 'class-validator';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop()
  email: string;  

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;

  @Prop()
  description: string;

  @Prop()
  authored_sidequests: [];

  @Prop()
  acquired_sidequests: [];
}

export const UserSchema = SchemaFactory.createForClass(User);