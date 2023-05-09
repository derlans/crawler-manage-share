import { CreateUserDto, LoginUserDto } from '@/dto/user.dto'
import { User } from '@/schemas/user.schema'
import { jwtSign } from '@/utils/jwt'
import { checkPassword, checkUserName } from '@crawler-manage-share/utils'
import { HttpException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  // 注册
  async register(user: CreateUserDto) {
    // 检查用户名和密码是否合法
    if (!checkUserName(user.name)) {
      throw new HttpException('用户名不合法', 400)
    }
    if (!checkPassword(user.password)) {
      throw new HttpException('密码不合法', 400)
    }
    // 检查用户名是否已经存在
    const isExist = await this.userModel.findOne({ name: user.name })
    if (isExist) {
      throw new HttpException('用户名已存在', 400)
    }
    // 创建用户
    return await this.userModel.create(user)
  }
  // 登录
  async login(user: LoginUserDto) {
    // 检查用户名和密码是否合法
    if (!checkUserName(user.name)) {
      throw new HttpException('用户名不合法', 400)
    }
    if (!checkPassword(user.password)) {
      throw new HttpException('密码不合法', 400)
    }
    // 检查用户名是否已经存在
    const isExist = await this.userModel.findOne({ name: user.name })
    if (!isExist) {
      throw new HttpException('用户名不存在', 400)
    }
    // 检查密码是否正确
    const data = await this.userModel.findOne({
      name: user.name,
      password: user.password,
    })
    if (!data) {
      throw new HttpException('密码错误', 400)
    }
    const token = jwtSign(data._id)
    // 登录成功
    return {
      token,
      user: data,
    }
  }
  // findonebyid
  async findOneById(id: string) {
    return await this.userModel.findById(id)
  }
  // 菜单
  async getMenu() {
    return [
      {
        label: 'Dashboard',
        key: 'dashboard',
        type: 1,
        subtitle: 'dashboard',
        openType: 1,
        auth: 'dashboard',
        path: '/dashboard',
        children: [
          {
            label: '主控台',
            key: 'console',
            type: 1,
            subtitle: 'console',
            openType: 1,
            auth: 'console',
            path: '/dashboard/console',
          },
          {
            label: '工作台',
            key: 'workplace',
            type: 1,
            subtitle: 'workplace',
            openType: 1,
            auth: 'workplace',
            path: '/dashboard/workplace',
          },
        ],
      },
      {
        label: '表单管理',
        key: 'form',
        type: 1,
        subtitle: 'form',
        openType: 1,
        auth: 'form',
        path: '/form',
        children: [
          {
            label: '基础表单',
            key: 'basic-form',
            type: 1,
            subtitle: 'basic-form',
            openType: 1,
            auth: 'basic-form',
            path: '/form/basic-form',
          },
          {
            label: '分步表单',
            key: 'step-form',
            type: 1,
            subtitle: 'step-form',
            openType: 1,
            auth: 'step-form',
            path: '/form/step-form',
          },
          {
            label: '表单详情',
            key: 'detail',
            type: 1,
            subtitle: 'detail',
            openType: 1,
            auth: 'detail',
            path: '/form/detail',
          },
        ],
      },
    ]
  }
}
