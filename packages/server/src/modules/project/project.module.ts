import { Module } from '@nestjs/common'
import { ProjectController } from './project.controller'
import { ProjectService } from './project.service'
import { ProjectSchema } from '../../schemas/project.schema'
import { MongooseModule } from '@nestjs/mongoose'
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Project', schema: ProjectSchema }]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
