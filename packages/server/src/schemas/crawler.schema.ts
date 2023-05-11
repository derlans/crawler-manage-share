import { CrawlerSchema, RunOptions } from '@crawler-manage-share/utils'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import exp from 'constants'
import { Document, Types } from 'mongoose'
@Schema({ timestamps: true })
export class CrawlerRun extends Document {
  @Prop({ required: true })
  name: string
  @Prop({ required: true })
  owner: Types.ObjectId
  @Prop({ required: true })
  project: Types.ObjectId
  @Prop({ required: true, type: Object })
  crawler: CrawlerSchema
  @Prop({ required: true, type: Object })
  runOptions: RunOptions
  @Prop({ type: Date })
  lastRunAt: Date
  @Prop({ default: 0 })
  runCount: number
}
export const CrawlerRunSchema = SchemaFactory.createForClass(CrawlerRun)
// 对应的_doc的类型
export type CrawlerRunDoc = CrawlerRun & Document

// 运行日志
@Schema({ timestamps: true })
export class CrawlerRunLog extends Document {
  @Prop({ required: true })
  owner: Types.ObjectId
  @Prop({ required: true })
  crawlerRun: Types.ObjectId
  @Prop({ required: true })
  name: string
  @Prop({ default: 1 }) //  1: 运行中 2: 运行完成 3: 运行失败
  status: number
  @Prop({ type: Date })
  endTime: Date
  @Prop({ default: [] })
  result: any[]
  @Prop({ default: 1 })
  type: number
}

export const CrawlerRunLogSchema = SchemaFactory.createForClass(CrawlerRunLog)
