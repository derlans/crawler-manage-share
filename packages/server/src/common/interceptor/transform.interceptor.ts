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
    const whitelist = [
      '/api/crawler/test',
      '/api/file/json',
      '/api/file/data',
      '/api/status',
      '/api/status/data',
    ]
    // 获取请求路径
    const url = context.switchToHttp().getRequest().url
    const isWhite = whitelist.some((item) => {
      return url.startsWith(item)
    })
    // 如果匹配白名单，直接放行
    if (isWhite) {
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
