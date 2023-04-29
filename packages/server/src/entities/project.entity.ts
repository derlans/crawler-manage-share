// export class Project extends Document {
//   @Prop({ required: true, unique: true })
//   name: string
//   @Prop({ required: false })
//   description: string
//   @Prop({ required: true })
//   owner: mongooseSchema.Types.ObjectId
//   @Prop({ required: true })
//   crawlerList: CrawlerSchema[]

import { CrawlerSchema } from '@crawler-manage-share/utils'

// }
export interface Project {
  name: string
  description: string
  owner: string
  crawlerList: CrawlerSchema[]
}
