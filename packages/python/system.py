# encoding:utf-8
import psutil


def get_cpu_usage():
    return psutil.cpu_percent(interval=1)


def get_memory_usage():
    return psutil.virtual_memory().percent

# 获取该进程的cpu使用率
def get_process_cpu_usage():
    return psutil.Process().cpu_percent(interval=1)

# 聚合信息，返回一个字典
def get_system_info():
    return {
        "cpuUsage": get_cpu_usage(),
        "memoryUsage": get_memory_usage(),
        "processCpuUsage": get_process_cpu_usage()
    }
