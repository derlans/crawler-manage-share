import { Module } from '@nestjs/common'
import { ApiController } from './api.controller'
import { ApiService } from './api.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ApiSchema } from '@/schemas/api.schema'
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Api', schema: ApiSchema }])],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
