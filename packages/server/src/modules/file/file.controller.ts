import { Controller, Get, Param, Query, Res } from '@nestjs/common'
import { FileService } from './file.service'
import { Response } from 'express'
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}
  @Get('json')
  readFile(@Query('fileName') fileName: string, @Res() res: Response): void {
    try {
      const fileContent = this.fileService.readFile(fileName + '.json')
      res.send(fileContent)
    } catch {
      res.send(JSON.stringify({ code: 500, msg: '文件不存在' }))
    }
  }
  @Get('data/:fileName')
  readData(@Param('fileName') fileName: string, @Res() res: Response): void {
    const fileContent = this.fileService.readFile(fileName + '.json')
    console.log(fileName)
    const json = JSON.parse(fileContent)
    const data = json.map((item) => {
      return item.data
    }) as any[]
    // 限制大小
    if (data.length > 1) {
      data.length = 1
    }
    res.send(JSON.stringify(data))
  }
}
