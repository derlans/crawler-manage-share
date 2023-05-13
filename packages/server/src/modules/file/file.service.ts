import { Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'
@Injectable()
export class FileService {
  saveJson(fileName: string, content: any): void {
    const filePath = path.join(__dirname, '../../../public', fileName + '.json')
    const jsonString = JSON.stringify(content)
    fs.writeFileSync(filePath, jsonString)
  }
  readFile(fileName: string): any {
    const filePath = path.join(__dirname, '../../../public', fileName)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    return fileContent
  }
}
