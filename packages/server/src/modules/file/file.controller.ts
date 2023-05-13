import { Controller, Get, Query, Res } from '@nestjs/common'
import { FileService } from './file.service'
import { Response } from 'express'
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}
  @Get('json')
  readFile(@Query('fileName') fileName: string, @Res() res: Response): void {
    const fileContent = this.fileService.readFile(fileName + '.json')
    res.send(fileContent)
  }
}
