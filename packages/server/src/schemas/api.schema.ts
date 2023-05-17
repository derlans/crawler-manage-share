/* api.schema.ts */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
// @Prop 装饰器接受一个可选的参数，通过这个，你可以指示这个属性是否是必须的，是否需要默认值，或者是标记它作为一个常量，下面是例子
// SchemaFactory 是 mongoose 内置的一个方法做用是读取模式文档 并创建 Schema 对象
import { Document, Types } from 'mongoose'
@Schema({ timestamps: true })
export class Api extends Document {
  @Prop({ required: true })
  name: string
  @Prop({ required: true })
  description: string
  @Prop({ required: true })
  owner: Types.ObjectId
  // 详细内容 富文本
  @Prop({ required: true })
  detail: string
  // swagger json
  @Prop({ required: true })
  swagger: string
}
export const ApiSchema = SchemaFactory.createForClass(Api)
