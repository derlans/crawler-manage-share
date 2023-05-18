# encoding:utf-8
from flask import Flask, request, jsonify
from crawler import Crawler
import requests
import json
app = Flask(__name__)
from concurrent.futures import ThreadPoolExecutor
@app.route('/execute/result', methods=['POST'])
def execute_code_result():
    data =request.get_json()
    code = data['code']
    allUserParams=data['allUserParams'] or []
    crawler = Crawler(code)
    crawler.run(allUserParams)
    return jsonify({'code': 0, 'msg': 'Execution successful', 'result': crawler.result})

@app.route('/execute', methods=['POST'])
def execute_code():
    data =request.get_json()
    print('收到请求')
    run(data)
    print('返回')
    return jsonify({'code': 0, 'msg': 'Execution successful'})

def run(data):
    code = data['code']
    _id = data['_id']
    allUserParams=data['allUserParams'] or []
    concurrency=data['concurrency'] or 1
    timeout=data['timeout'] or 5000
    crawler = Crawler(code) 
    print('开始运行')
    crawler.run(allUserParams,concurrency,timeout)
    print('运行结束')
    notify_node_server({'_id':_id, 'result':crawler.result})

# 将爬虫运行结果通过接口调用通知node服务端
def notify_node_server(data):
    print('通知node服务端')
    requests.post('http://localhost:3000/api/log/notify', json=data)

if __name__ == '__main__':
    app.run(debug=True)
