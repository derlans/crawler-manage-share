import { Controller, Get, Query } from '@nestjs/common'
import { AppService } from './app.service'
import axios from 'axios'
import { Crawler } from '@crawler-manage-share/utils'

const envParams = {
  axios,
}
const userParams = {
  q: '张杰',
  page: 0,
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  async getHello(@Query() query): Promise<Object> {
    const fn = `async function ({axios},{q,page}){
      return await axios
      .get('https://m.weibo.cn/api//container/getIndex', {
        params: {
          containerid: '100103type=1&q='+q,
          page_type: 'searchall',
          page: page,
        },
      })  
      .then((res) => { 
        return res.data.data
      }).catch(()=>{
        console.log('错误')
        return '错误'
      })
    }`
    const crawler = new Crawler(fn as any, { envParams })
    const res = await crawler.run({
      concurrency: 50,
      allUserParams: Array.from({ length: query.page || 1 }).map(
        (item, index) => ({ page: index, q: query.q || userParams.q }),
      ),
    })
    return res
  }
}
