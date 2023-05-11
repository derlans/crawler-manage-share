import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable, map } from 'rxjs'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse()
    // 白名单
    const whitelist = ['/api/crawler/test']
    // 获取请求路径
    const url = context.switchToHttp().getRequest().url
    // 如果是白名单的请求，直接返回
    if (whitelist.includes(url)) {
      return next.handle()
    }
    response.header('Content-Type', 'application/json; charset=utf-8')
    response.status(200)
    return next.handle().pipe(
      map((v = {}) => {
        return {
          data: v?.data || {},
          code: v?.code || 200,
          msg: v?.message || '请求成功',
        }
      }),
    )
  }
}
