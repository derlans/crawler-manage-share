import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger, ValidationPipe } from '@nestjs/common'
import { HttpExceptionFilter } from './common/filters/http-exception.filter'
import { TransformInterceptor } from './common/interceptor/transform.interceptor'
import { AuthGuard } from '@/common/guard/auth.guard'
import { UserService } from './modules/user/user.service'
import { urlencoded, json } from 'express'
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))
  app.setGlobalPrefix('api')
  app.useGlobalFilters(new HttpExceptionFilter(new Logger()))
  app.useGlobalInterceptors(new TransformInterceptor())
  const userService = app.get(UserService)
  app.useGlobalGuards(new AuthGuard(userService))
  app.enableCors()
  app.use(json({ limit: '50mb' }))
  app.use(urlencoded({ extended: true, limit: '50mb' }))
  await app.listen(3000)
}
bootstrap()
