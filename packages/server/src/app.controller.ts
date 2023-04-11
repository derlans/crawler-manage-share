import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { add } from 'share/utils/index'
import axios from 'axios'
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
  async getHello(): Promise<string> {
    const fn = `function ({axios},{q,page}){
      axios
      .get('https://m.weibo.cn/api//container/getIndex', {
        params: {
          containerid: '100103type=1&q='+q,
          page_type: 'searchall',
          page: page,
        },
      })  
      .then((res) => { 
        console.log(res.data.data.cards[0].card_group[0].mblog.text)
        return res.data.data.cards[0].card_group[0].mblog.text
      }).catch(()=>{
        console.log('错误')
        return '错误'
      })
    }`
    let value = ''
    for (let i = 1; i < 10; i++) {
      userParams.page = i
      const test = `const fn = ${fn};retuurn fn(envParams,userParams)`
      const res = await Function(test)()
      value += res
      value += '\n'
    }
    return value
  }
}
