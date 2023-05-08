// 用户收藏项目
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
@Schema({ timestamps: true })
export class FavoriteProject extends Document {
  @Prop({ required: true, index: true })
  userid: Types.ObjectId
  @Prop({ required: true, index: true })
  projectid: Types.ObjectId
}
export const FavoriteProjectSchema =
  SchemaFactory.createForClass(FavoriteProject)
