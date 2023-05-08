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
