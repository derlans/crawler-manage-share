import { Body, Controller, Post, Req, Request } from '@nestjs/common'
import { CommunityService } from './community.service'

@Controller('community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}
  @Post('api/list')
  async apiList(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    const options = {
      ...body,
      query: { ...body.query, public: true },
    }
    return {
      data: await this.communityService.findApi(userid, options),
    }
  }
  @Post('project/list')
  async projectList(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    const options = {
      ...body,
      query: { ...body.query, public: true },
    }
    return {
      data: await this.communityService.findProject(userid, options),
    }
  }
  @Post('api/detail')
  async apiDetail(@Body() body: any, @Req() req: Request) {
    const _id = body._id
    return {
      data: await this.communityService.findOneApi({ _id, public: true }),
    }
  }
  @Post('project/detail')
  async projectDetail(@Body() body: any, @Req() req: Request) {
    const _id = body._id
    return {
      data: await this.communityService.findOneProject({ _id, public: true }),
    }
  }
  @Post('api/like')
  async apiLike(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    const _id = body._id
    await this.communityService.likeApi(_id, userid)
  }
  @Post('api/unlike')
  async apiUnlike(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    const _id = body._id
    await this.communityService.unlikeApi(_id, userid)
  }
  @Post('api/favorite')
  async apiFavorite(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    const _id = body._id
    await this.communityService.favoriteApi(_id, userid)
  }
  @Post('api/unfavorite')
  async apiUnfavorite(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    const _id = body._id
    await this.communityService.unfavoriteApi(_id, userid)
  }
  @Post('project/like')
  async projectLike(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    const _id = body._id
    await this.communityService.likeProject(_id, userid)
  }
  @Post('project/unlike')
  async projectUnlike(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    const _id = body._id
    await this.communityService.unlikeProject(_id, userid)
  }
  @Post('project/favorite')
  async projectFavorite(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    const _id = body._id
    await this.communityService.favoriteProject(_id, userid)
  }
  @Post('project/unfavorite')
  async projectUnfavorite(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    const _id = body._id
    await this.communityService.unfavoriteProject(_id, userid)
  }
}
