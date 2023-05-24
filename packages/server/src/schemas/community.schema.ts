import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
// 用户收藏项目
@Schema({ timestamps: true })
export class FavoriteProject extends Document {
  @Prop({ required: true, index: true })
  user: Types.ObjectId
  @Prop({ required: true, index: true })
  project: Types.ObjectId
}
export const FavoriteProjectSchema =
  SchemaFactory.createForClass(FavoriteProject)

// 用户点赞项目
@Schema({ timestamps: true })
export class LikeProject extends Document {
  @Prop({ required: true, index: true })
  user: Types.ObjectId
  @Prop({ required: true, index: true })
  project: Types.ObjectId
}
export const LikeProjectSchema = SchemaFactory.createForClass(LikeProject)

// 用户收藏api文档
@Schema({ timestamps: true })
export class FavoriteApi extends Document {
  @Prop({ required: true, index: true })
  user: Types.ObjectId
  @Prop({ required: true, index: true })
  api: Types.ObjectId
}
export const FavoriteApiSchema = SchemaFactory.createForClass(FavoriteApi)

// 用户点赞api文档
@Schema({ timestamps: true })
export class LikeApi extends Document {
  @Prop({ required: true, index: true })
  user: Types.ObjectId
  @Prop({ required: true, index: true })
  api: Types.ObjectId
}
export const LikeApiSchema = SchemaFactory.createForClass(LikeApi)
