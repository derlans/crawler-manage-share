import { CreateUserDto, LoginUserDto } from '@/dto/user.dto'
import { Body, Controller, Post } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  async register(@Body() user: CreateUserDto) {
    const data = await this.userService.register(user)
    return {
      message: '注册成功',
      data,
    }
  }
  @Post('login')
  async login(@Body() user: LoginUserDto) {
    const data = await this.userService.login(user)
    return {
      message: '登录成功',
      data,
    }
  }
}
