import { Api } from '@/schemas/api.schema'
import {
  FavoriteApi,
  FavoriteProject,
  LikeApi,
  LikeProject,
} from '@/schemas/community.schema'
import { Project } from '@/schemas/project.schema'
import { FindOptions, commonFind } from '@/utils/model'
import { HttpException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class CommunityService {
  constructor(
    @InjectModel(Api.name)
    private readonly apiModel: Model<Api>,
    @InjectModel(Project.name)
    private readonly projectModel: Model<Project>,
    @InjectModel(FavoriteProject.name)
    private readonly favoriteProjectModel: Model<FavoriteProject>,
    @InjectModel(LikeProject.name)
    private readonly likeProjectModel: Model<LikeProject>,
    @InjectModel(FavoriteApi.name)
    private readonly favoriteApiModel: Model<FavoriteApi>,
    @InjectModel(LikeApi.name)
    private readonly likeApiModel: Model<LikeApi>,
  ) {}
  async findApi(userid: string, findOptions: FindOptions) {
    const { list, total, pageCount } = await commonFind(
      this.apiModel,
      findOptions,
    )
    const listWithLikeAndFavorite = await Promise.all(
      list.map(async (item) => {
        const isLike = (await this.likeApiModel.exists({
          api: item._id.toString(),
          user: userid,
        }))
          ? true
          : false
        const isFavorite = (await this.favoriteApiModel.exists({
          api: item._id.toString(),
          user: userid,
        }))
          ? true
          : false
        return {
          ...item.toJSON(),
          isLike,
          isFavorite,
        }
      }),
    )
    return {
      list: listWithLikeAndFavorite,
      total,
      pageCount,
    }
  }
  async findProject(userid: string, findOptions: FindOptions) {
    const { list, total, pageCount } = await commonFind(
      this.projectModel,
      findOptions,
    )
    const listWithLikeAndFavorite = await Promise.all(
      list.map(async (item) => {
        const isLike = (await this.likeProjectModel.exists({
          project: item._id.toString(),
          user: userid,
        }))
          ? true
          : false
        const isFavorite = (await this.favoriteProjectModel.exists({
          project: item._id.toString(),
          user: userid,
        }))
          ? true
          : false
        return {
          ...item.toJSON(),
          isLike: isLike,
          isFavorite,
        }
      }),
    )
    return {
      list: listWithLikeAndFavorite,
      total,
      pageCount,
    }
  }
  async findOneApi(query: any) {
    return await this.apiModel.findOne(query)
  }
  async findOneProject(query: any) {
    return await this.projectModel.findOne(query)
  }
  async isPublicApi(apiid: string) {
    const api = await this.apiModel.findById(apiid)
    return api?.public
  }
  async isPublicProject(projectid: string) {
    const project = await this.projectModel.findById(projectid)
    return project?.public
  }
  // 不是公开的项目，直接抛出错误
  async checkPublicProject(projectid: string) {
    const isPublic = await this.isPublicProject(projectid)
    if (!isPublic) {
      throw new HttpException('项目不公开', 403)
    }
  }
  // 不是公开的接口，直接抛出错误
  async checkPublicApi(apiid: string) {
    const isPublic = await this.isPublicApi(apiid)
    if (!isPublic) {
      throw new HttpException('接口不公开', 403)
    }
  }
  async likeApi(apiid: string, userid: string) {
    await this.checkPublicApi(apiid)
    const isLike = await this.likeApiModel.exists({
      api: apiid,
      user: userid,
    })
    if (isLike) return
    await this.likeApiModel.create({
      api: apiid,
      user: userid,
    })
    await this.apiModel.updateOne({ _id: apiid }, { $inc: { likeCount: 1 } })
  }
  async unlikeApi(apiid: string, userid: string) {
    await this.checkPublicApi(apiid)
    const isLike = await this.likeApiModel.exists({
      api: apiid,
      user: userid,
    })
    if (isLike) {
      await this.likeApiModel.deleteOne({
        api: apiid,
        user: userid,
      })
      await this.apiModel.updateOne({ _id: apiid }, { $inc: { likeCount: -1 } })
    }
  }
  async favoriteApi(apiid: string, userid: string) {
    await this.checkPublicApi(apiid)
    const isFavorite = await this.favoriteApiModel.exists({
      api: apiid,
      user: userid,
    })
    if (isFavorite) return
    await this.favoriteApiModel.create({
      api: apiid,
      user: userid,
    })
    await this.apiModel.updateOne(
      { _id: apiid },
      { $inc: { favoriteCount: 1 } },
    )
  }
  async unfavoriteApi(apiid: string, userid: string) {
    await this.checkPublicApi(apiid)
    const isFavorite = await this.favoriteApiModel.exists({
      api: apiid,
      user: userid,
    })
    if (isFavorite) {
      await this.favoriteApiModel.deleteOne({
        api: apiid,
        user: userid,
      })
      await this.apiModel.updateOne(
        { _id: apiid },
        { $inc: { favoriteCount: -1 } },
      )
    }
  }
  async likeProject(projectid: string, userid: string) {
    await this.checkPublicProject(projectid)
    const isLike = await this.likeProjectModel.exists({
      project: projectid,
      user: userid,
    })
    if (isLike) return
    await this.likeProjectModel.create({
      project: projectid,
      user: userid,
    })
    await this.projectModel.updateOne(
      { _id: projectid },
      { $inc: { likeCount: 1 } },
    )
  }
  async unlikeProject(projectid: string, userid: string) {
    await this.checkPublicProject(projectid)
    const isLike = await this.likeProjectModel.exists({
      project: projectid,
      user: userid,
    })
    if (isLike) {
      await this.likeProjectModel.deleteOne({
        project: projectid,
        user: userid,
      })
      await this.projectModel.updateOne(
        { _id: projectid },
        { $inc: { likeCount: -1 } },
      )
    }
  }
  async favoriteProject(projectid: string, userid: string) {
    await this.checkPublicProject(projectid)
    const isFavorite = await this.favoriteProjectModel.exists({
      project: projectid,
      user: userid,
    })
    if (isFavorite) return
    await this.favoriteProjectModel.create({
      project: projectid,
      user: userid,
    })
    await this.projectModel.updateOne(
      { _id: projectid },
      { $inc: { favoriteCount: 1 } },
    )
  }
  async unfavoriteProject(projectid: string, userid: string) {
    await this.checkPublicProject(projectid)
    const isFavorite = await this.favoriteProjectModel.exists({
      project: projectid,
      user: userid,
    })
    if (isFavorite) {
      await this.favoriteProjectModel.deleteOne({
        project: projectid,
        user: userid,
      })
      await this.projectModel.updateOne(
        { _id: projectid },
        { $inc: { favoriteCount: -1 } },
      )
    }
  }
}
