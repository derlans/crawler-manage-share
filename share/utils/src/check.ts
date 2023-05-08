// 检查用户名
export const checkUserName = (name: string) => {
  const reg = /^[a-zA-Z0-9_-]{4,16}$/
  return reg.test(name)
}
// 检查密码
export const checkPassword = (password: string) => {
  const reg = /^[a-zA-Z0-9_-]{6,16}$/
  return reg.test(password)
}
