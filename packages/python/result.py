# encoding: utf-8
import json
from wordcloud import WordCloud
import matplotlib.pyplot as plt
import jieba
from collections import Counter
from typing import Dict, List


def read_json(file_path: str):
    with open(file_path, 'r', encoding='utf-8') as file:
        # 纯text读取
        data: List[list[str]] = json.load(file)
    return data


def read_text(file_path: str):
    with open(file_path, 'r', encoding='utf-8') as file:
        data: str = file.read()
    return data


def generate_wordcloud(text: str):
    wordcloud = WordCloud(width=800,
                          height=400,
                          font_path='msyh.ttc',
                          background_color='white').generate(text)
    plt.figure(figsize=(10, 5))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    plt.show()


def generate_word_frequency(text: str) -> Counter:
    words = jieba.lcut(text,cut_all = True)
    word_counter = Counter(words)
    return word_counter


json_file_path = './data/test1.json'

json_data = read_json(json_file_path)

text_data = ''
for data in json_data:
    for text in data:
        text_data += text
        text_data += ' '

text = read_text(json_file_path)
# text_data=text_data.replace('，','').replace('。','').replace('！','').replace('？','').replace('、','').replace('：','').replace('“','').replace('”','').replace('（','').replace('）','').replace('《','').replace('》','').replace('；','').replace('‘','').replace('’','').replace('【','').replace('】','').replace('…','').replace('—','').replace('￥','')
# generate_wordcloud(text_data)
# generate_wordcloud(text_data)
word_frequency = generate_word_frequency(text_data)
print(word_frequency)
