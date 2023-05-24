import { Model } from 'mongoose'

export interface FindOptions {
  query?: Record<string, any>
  page?: number
  pageSize?: number
  startDate?: Date
  endDate?: Date
  fuzzyFields?: string[]
}
export async function commonFind<T extends any>(
  model: Model<T>,
  options: FindOptions = {},
  searchableFields?: string[],
) {
  const {
    query = {},
    page = 1,
    pageSize = 10,
    startDate,
    endDate,
    fuzzyFields,
  } = options
  // 过滤掉空值
  const filterQuery: any = { ...query }
  for (const key in query) {
    if (query[key] === '' || query[key] === undefined || query[key] === null) {
      delete filterQuery[key]
    }
  }
  if (fuzzyFields && fuzzyFields.length > 0) {
    for (const field of fuzzyFields) {
      if (filterQuery[field]) {
        filterQuery[field] = { $regex: query[field], $options: 'i' }
      }
    }
  }
  // 过滤掉不可以查询的字段
  if (searchableFields) {
    for (const key in filterQuery) {
      if (!searchableFields.includes(key)) {
        delete filterQuery[key]
      }
    }
  }
  if (startDate && endDate) {
    filterQuery.createdAt = { $gte: startDate, $lte: endDate }
  } else if (startDate) {
    filterQuery.createdAt = { $gte: startDate }
  } else if (endDate) {
    filterQuery.createdAt = { $lte: endDate }
  }
  const list = (await model
    .find(filterQuery)
    .sort({ createdAt: -1 })
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .exec()) as T[]

  const total = await model.countDocuments(filterQuery)
  const pageCount = Math.ceil(total / pageSize)
  return {
    list,
    total,
    pageCount,
  }
}
