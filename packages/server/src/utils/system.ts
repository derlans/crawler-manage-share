const os = require('os')
const pidusage = require('pidusage')
const { exec } = require('child_process')
export const getMemoryUsage = () => {
  const totalMemory = os.totalmem()
  const freeMemory = os.freemem()
  const memoryUsage = (1 - freeMemory / totalMemory) * 100
  return memoryUsage
}

export const getProcessCpuUsage = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    pidusage(process.pid, function (err, stats) {
      if (err) {
        console.error(err)
        reject(err)
        return
      }
      resolve(stats.cpu)
    })
  })
}

// 兼容windows和linux系统
export const getCPUUsage = () => {
  return new Promise((resolve, reject) => {
    exec(
      'typeperf -sc 1 "\\Processor(_Total)\\% Processor Time"',
      (error, stdout, stderr) => {
        if (error) {
          reject(error)
          return
        }
        // 解析输出，提取CPU使用率
        const outputLines = stdout.split('\n')
        const cpuUsageLine = outputLines[2]
        const cpuUsage = cpuUsageLine.split(',')[1].trim().replaceAll('"', '')
        resolve(Number(cpuUsage))
      },
    )
  })
}

export const getSystemInfo = async () => {
  const memoryUsage = getMemoryUsage()
  const cpuUsage = await getCPUUsage()
  const processCpuUsage = await getProcessCpuUsage()
  return {
    memoryUsage,
    cpuUsage,
    processCpuUsage,
  }
}
