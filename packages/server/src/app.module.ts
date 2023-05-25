import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ProjectModule } from './modules/project/project.module'
import { UserModule } from './modules/user/user.module'
import { CrawlerModule } from './modules/crawler/crawler.module'
import { LogModule } from './modules/log/log.module'
import { FileModule } from './modules/file/file.module'
import { ApiModule } from './modules/api/api.module'
import { TaskSchedulerModule } from './modules/task-scheduler/task-scheduler.module'
import { CommunityModule } from './modules/community/community.module'
import { StatusMonitorModule } from 'nestjs-status-monitor'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/crawler'),
    ProjectModule,
    TaskSchedulerModule,
    UserModule,
    CrawlerModule,
    LogModule,
    FileModule,
    ApiModule,
    CommunityModule,
    StatusMonitorModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
