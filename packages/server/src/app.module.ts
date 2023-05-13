import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ProjectModule } from './modules/project/project.module'
import { UserModule } from './modules/user/user.module'
import { CrawlerModule } from './modules/crawler/crawler.module'
import { LogModule } from './modules/log/log.module'
import { FileModule } from './modules/file/file.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/crawler'),
    ProjectModule,
    UserModule,
    CrawlerModule,
    LogModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
