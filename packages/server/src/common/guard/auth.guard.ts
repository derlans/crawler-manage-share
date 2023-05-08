import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { jwtConstants, whitelist } from '@/constants'
import { UserService } from '@/modules/user/user.service'
import { jwtVerify } from '@/utils/jwt'
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest()
    const token = request.headers['authorization']
    const url = request.url
    if (whitelist.includes(url)) {
      return true
    }
    const id = jwtVerify(token)
    if (!id) {
      throw new HttpException('没有权限', 403)
    }
    const user = await this.userService.findOneById(id)
    if (!user) {
      throw new HttpException('没有权限', 403)
    }
    // 把user挂载到request上
    request.user = user
    return true
  }
}
