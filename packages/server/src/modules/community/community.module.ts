import { Module } from '@nestjs/common'
import { CommunityController } from './community.controller'
import { CommunityService } from './community.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ApiSchema } from '@/schemas/api.schema'
import { ProjectSchema } from '@/schemas/project.schema'
import {
  FavoriteProjectSchema,
  LikeProjectSchema,
  FavoriteApiSchema,
  LikeApiSchema,
} from '@/schemas/community.schema'
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Api', schema: ApiSchema },
      { name: 'Project', schema: ProjectSchema },
      { name: 'FavoriteProject', schema: FavoriteProjectSchema },
      { name: 'LikeProject', schema: LikeProjectSchema },
      { name: 'FavoriteApi', schema: FavoriteApiSchema },
      { name: 'LikeApi', schema: LikeApiSchema },
    ]),
  ],
  controllers: [CommunityController],
  providers: [CommunityService],
})
export class CommunityModule {}
