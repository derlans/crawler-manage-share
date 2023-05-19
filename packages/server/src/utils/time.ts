export const DAY = 24 * 60 * 60 * 1000
export const WEEK = 7 * 24 * 60 * 60 * 1000
export const MONTH = 30 * 24 * 60 * 60 * 1000
export const YEAR = 365 * 24 * 60 * 60 * 1000
export const now = () => new Date()
export const today = () => new Date(now().setHours(0, 0, 0, 0))
export const tomorrow = () => new Date(today().getTime() + DAY)
export const nowTimestamp = () => now().getTime()
export const todayTimestamp = () => today().getTime()
export const tomorrowTimestamp = () => tomorrow().getTime()
export const lastMonth = () => new Date(tomorrowTimestamp() - MONTH)
export const lastWeek = () => new Date(tomorrowTimestamp() - WEEK)
export const lastDay = () => new Date(tomorrowTimestamp() - DAY)
export const lastYear = () => new Date(tomorrowTimestamp() - YEAR)
export const lastNDay = (n: number) => new Date(tomorrowTimestamp() - n * DAY)
export const lastNWeek = (n: number) => new Date(tomorrowTimestamp() - n * WEEK)
export const lastNMonth = (n: number) =>
  new Date(tomorrowTimestamp() - n * MONTH)
export const lastNYear = (n: number) => new Date(tomorrowTimestamp() - n * YEAR)
