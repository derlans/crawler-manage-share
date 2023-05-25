const os = require('os')
const pidusage = require('pidusage')

// 获取特定进程的CPU使用率
// pidusage(process.pid, function (err, stats) {
//   if (err) {
//     console.error(err)
//     return
//   }

//   console.log(process.pid + 'CPU使用率:', stats.cpu)
// })

export const getMemoryUsage = () => {
  const totalMemory = os.totalmem()
  const freeMemory = os.freemem()

  // 计算内存使用率
  const memoryUsage = (1 - freeMemory / totalMemory) * 100
  pidusage(process.pid, function (err, stats) {
    if (err) {
      console.error(err)
      return
    }

    console.log(process.pid + 'CPU使用率:', stats.cpu)
  })
  return memoryUsage
}
// 获取系统的CPU信息
const cpuInfo = os.cpus()

console.log('CPU信息:', cpuInfo)

export const getCPUUsage = () => {}
