import { CrawlerSchema } from '@crawler-manage-share/utils'
import { IsObject, IsOptional, IsString } from 'class-validator'

export class CreateProjectDto {
  @IsString()
  readonly name: string
  @IsString()
  readonly description: string
  @IsObject({ each: true })
  @IsOptional()
  readonly crawlerList?: CrawlerSchema[]
}
