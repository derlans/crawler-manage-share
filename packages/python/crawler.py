import requests
import time
import threading
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor
MAX_WORKERS = 20
class Crawler:
    def __init__(self, code):
        self.code = code
        self.result = []

    def _timeout_handler(self,isTimeout):
        print('触发超时处理函数')
        isTimeout['value'] = True
        result_entry = {
            'data': None,
            'isSuccess': False,
            'code': 500,
            'msg': 'Execution timeout',
            'date': int(time.time()),
            'userParams': None,
            'executionTime': None
        }
        self.result.append(result_entry)

    def runOne(self, params, timeout=5000):
        try:
            global_vars = {}
            global_vars['params'] = params
            global_vars['requests'] = requests
            global_vars['time'] = time
            global_vars['BeautifulSoup'] = BeautifulSoup

            start_time = time.time()
            isTimeout = {'value':False}
             # 创建一个 Timer 对象，在超时时间后触发超时处理函数
            timer = threading.Timer(timeout/1000, lambda: self._timeout_handler(isTimeout))
            timer.start()
            start_time = time.time()
            print('开始执行代码',start_time)
            exec(self.code, global_vars)
            if(isTimeout.get('value')):
                return
            end_time = time.time()
            print('代码执行结束',end_time)
            execution_time = end_time - start_time

            timer.cancel()  # 取消定时器，避免超时处理函数执行


            result_entry = {
                'data': global_vars.get('data'),
                'isSuccess': True,
                'code': 200,
                'msg': 'Execution successful',
                'date': int(time.time()),
                'userParams': params,
                'executionTime': execution_time
            }
            self.result.append(result_entry)
        except Exception as e:
            timer.cancel()  # 取消定时器，避免超时处理函数执行
            result_entry = {
                'data': None,
                'isSuccess': False,
                'code': 500,
                'msg': str(e),
                'date': int(time.time()),
                'userParams': params,
                'executionTime': None
            }
            self.result.append(result_entry)

    def run(self, allUserParams, concurrency=1, timeout=5000):
        # self.runOne(allUserParams[0], timeout)
        concurrency=min(concurrency,len(allUserParams)) > MAX_WORKERS and MAX_WORKERS or min(concurrency,len(allUserParams))

        with ThreadPoolExecutor(max_workers=concurrency) as executor:
            futures = []
            for params in allUserParams:
                future = executor.submit(self.runOne, params, timeout)
                futures.append(future)
            for future in futures:
                future.result()
# crawler = Crawler('print(params,params.get(\'url\'));response = requests.get(params.get(\'url\')); data = response.text')
# allUserParams = [
#     {'url': 'http://127.0.0.1:5000/test'},
#     {'url': 'http://127.0.0.1:5000/test'},
#     # 可以添加更多的参数
# ]
# crawler.run(allUserParams, concurrency=2)
# print(crawler.result)
