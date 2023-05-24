# encoding:utf-8
import psutil

def get_cpu_usage():
    return psutil.cpu_percent(interval=1)

# 示例用法
cpu_usage = get_cpu_usage()
print(f'CPU 使用率: {cpu_usage}%')
