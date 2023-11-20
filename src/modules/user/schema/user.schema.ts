import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: Number })
  userId: number;

  @Prop({ required: true, type: String })
  userEmail: string;

  @Prop({ type: String })
  userName: string;

  @Prop({ type: Number })
  follower?: number;

  @Prop({ type: Number })
  following?: number;

  @Prop({ type: String })
  friend?: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);