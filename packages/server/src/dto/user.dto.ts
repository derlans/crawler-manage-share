import { IsString } from 'class-validator'
export class CreateUserDto {
  @IsString()
  readonly name: string
  @IsString()
  readonly password: string
}

export class LoginUserDto {
  @IsString()
  readonly name: string
  @IsString()
  readonly password: string
}
