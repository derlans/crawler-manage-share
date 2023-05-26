import * as jwt from 'jsonwebtoken'
import { jwtConstants } from '@/config/constants'
export const jwtSign = (id: string) => {
  const token = jwt.sign(
    {
      id,
      time: new Date().getTime(),
    },
    jwtConstants.secret,
  )
  return token
}

export const jwtVerify = (token: string) => {
  try {
    const res = jwt.verify(token, jwtConstants.secret)
    const time = res['time']
    const id = res['id']
    const nowTime = new Date().getTime()
    if (nowTime - time < jwtConstants.expiresIn) {
      return id
    }
  } catch (error) {}
  return false
}
