import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  name: string
  @Prop({ required: true })
  password: string
}
export const UserSchema = SchemaFactory.createForClass(User)
// 对应的_doc的类型
export type UserDoc = User & Document
