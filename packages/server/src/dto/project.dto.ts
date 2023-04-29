import { CrawlerSchema } from '@crawler-manage-share/utils'
import { IsObject, IsString } from 'class-validator'

export class CreateProjectDto {
  @IsString()
  readonly name: string
  @IsString()
  readonly description: string
  @IsString()
  readonly owner: string
  @IsObject({ each: true })
  readonly crawlerList: CrawlerSchema[]
}