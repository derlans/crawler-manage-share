export const DAY = 24 * 60 * 60 * 1000
export const WEEK = 7 * 24 * 60 * 60 * 1000
export const MONTH = 30 * 24 * 60 * 60 * 1000
export const YEAR = 365 * 24 * 60 * 60 * 1000
export const now = () => new Date()
export const nowTimestamp = () => now().getTime()
export const lastMonth = () => new Date(nowTimestamp() - MONTH)
export const lastWeek = () => new Date(nowTimestamp() - WEEK)
export const lastDay = () => new Date(nowTimestamp() - DAY)
export const lastYear = () => new Date(nowTimestamp() - YEAR)
export const lastNDay = (n: number) => new Date(nowTimestamp() - n * DAY)
export const lastNWeek = (n: number) => new Date(nowTimestamp() - n * WEEK)
export const lastNMonth = (n: number) => new Date(nowTimestamp() - n * MONTH)
export const lastNYear = (n: number) => new Date(nowTimestamp() - n * YEAR)
