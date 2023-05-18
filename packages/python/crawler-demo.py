# encoding:utf-8
import requests
import re
def deepSearchJSON(jsonObj, key):
    results = []
    def search(obj):
        for prop in obj:
            if prop == key:
                results.append(re.sub('[^\u4e00-\u9fa5]', '', str(obj[prop])))
            elif isinstance(obj[prop], dict):
                search(obj[prop])
            elif isinstance(obj[prop], list):
                for item in obj[prop]:
                    if isinstance(item, dict):
                        search(item)
    search(jsonObj)
    return results

def fn(q, page):
    url = 'https://m.weibo.cn/api/container/getIndex'
    params = {
        'containerid': '100103type=1&q=' + q,
        'page_type': 'searchall',
        'page': page
    }

    response = requests.get(url, params=params)
    response_json = response.json()
    return  deepSearchJSON(response_json['data'], 'text')

# 调用爬虫函数
data = fn('张杰', 1)
