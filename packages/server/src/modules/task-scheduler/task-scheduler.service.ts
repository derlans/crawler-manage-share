import { Inject, Injectable, forwardRef } from '@nestjs/common'
import { SchedulerRegistry } from '@nestjs/schedule'
import { CronJob } from 'cron'
import { Model } from 'mongoose'
import { LogService } from '../log/log.service'
import { CronTask } from '@/schemas/cronTask.shcema'
import { FindOptions, commonFind } from '@/utils/model'
import { InjectModel } from '@nestjs/mongoose'
@Injectable()
export class TaskSchedulerService {
  constructor(
    private readonly schedulerRegistry: SchedulerRegistry,
    @InjectModel(CronTask.name)
    private readonly cronTaskModel: Model<CronTask>,
    @Inject(forwardRef(() => LogService))
    private readonly logService: LogService,
  ) {}
  createDynamicCronJob(name: string, schedule: string, callback: () => void) {
    const job = new CronJob(schedule, callback)
    this.schedulerRegistry.addCronJob(name, job)
    job.start()
  }
  removeDynamicCronJob(name: string) {
    try {
      const job = this.schedulerRegistry.getCronJob(name)
      if (job) {
        job.stop()
        this.schedulerRegistry.deleteCronJob(name)
      }
    } catch (error) {}
  }
  async createCronJob(body: any) {
    const { name, schedule, description, owner, crawlerRun } = body
    const cronJob = await this.cronTaskModel.create({
      name,
      schedule,
      description,
      owner,
      crawlerRun,
      status: 1,
    })
    this.createDynamicCronJob(cronJob._id.toString(), schedule, async () => {
      const log = await this.logService.create(owner, crawlerRun)
      await this.cronTaskModel.findByIdAndUpdate(cronJob._id, {
        $push: { logList: log._id },
      })
    })
  }
  async stopCronJob(id: string) {
    this.removeDynamicCronJob(id)
    await this.cronTaskModel.findByIdAndUpdate(id, { status: 0 })
  }
  async startCronJob(id: string) {
    const cronJob = await this.cronTaskModel.findByIdAndUpdate(id, {
      status: 1,
    })
    this.createDynamicCronJob(
      cronJob._id.toString(),
      cronJob.schedule,
      async () => {
        const log = await this.logService.create(
          cronJob.owner.toString(),
          cronJob.crawlerRun.toString(),
        )
        await this.cronTaskModel.findByIdAndUpdate(cronJob._id, {
          $push: { logList: log._id },
        })
      },
    )
  }
  async initCronJob() {
    const cronTasks = await this.cronTaskModel.find({ status: 1 })
    cronTasks.forEach((cronTask) => {
      this.createDynamicCronJob(
        cronTask._id.toString(),
        cronTask.schedule,
        async () => {
          const log = await this.logService.create(
            cronTask.owner.toString(),
            cronTask.crawlerRun.toString(),
          )
          await this.cronTaskModel.findByIdAndUpdate(cronTask._id, {
            $push: { logList: log._id },
          })
        },
      )
    })
  }
  async onApplicationBootstrap() {
    console.log('init cron job')
    await this.initCronJob()
  }
  // 查找，支持分页,支持name模糊查询,支持时间范围查询
  async find(findOptions: FindOptions) {
    const res = await commonFind(this.cronTaskModel, findOptions, [
      'name',
      'description',
      'status',
    ])
    return res
  }
  async findByid(id: string) {
    return await this.cronTaskModel.findById(id).exec()
  }
}
