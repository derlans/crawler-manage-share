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
  '/api/log/notify',
  '/api/status',
  '/api/status/data',
]

export const pythonServePath = {
  // python服务地址
  url: 'http://127.0.0.1:5000',
  // 测试执行python脚本的接口
  test: 'http://127.0.0.1:5000/execute/result',
  // 执行python脚本的接口
  execute: 'http://127.0.0.1:5000/execute',
}
