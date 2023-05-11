export const jwtConstants = {
  // 密钥
  secret: 'adasuihio68486486adws',
  // 过期时间
  expiresIn: 1000 * 60 * 60 * 24 * 7,
}

export const whitelist = [
  '/api/user/login',
  '/api/user/register',
  '/api/crawler/test',
]
