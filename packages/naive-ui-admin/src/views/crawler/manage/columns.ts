import { NTag } from 'naive-ui';
import { h } from 'vue';

export const columns = [
  {
    title: '爬虫名',
    key: 'name',
    width: 100,
  },
  {
    title: '运行次数',
    key: 'runCount',
    width: 100,
  },
  {
    title: '爬虫语言',
    key: 'crawler.language',
    width: 100,
    render(row) {
      const { language } = row.crawler;
      if (language === 'python') {
        return h(NTag, { type: 'success' }, { default: () => 'Python' });
      }
      return h(NTag, { type: 'warning' }, { default: () => 'JavaScript' });
    },
  },
  {
    title: '创建时间',
    key: 'createdAt',
    render(row) {
      return new Date(row.createdAt).toLocaleString();
    },
    width: 160,
  },
  {
    title: '最后运行时间',
    key: 'lastRunAt',
    width: 160,
    render(row) {
      return new Date(row.lastRunAt).toLocaleString();
    },
  },
];
