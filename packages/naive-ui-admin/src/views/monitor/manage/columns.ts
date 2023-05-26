import { NTag } from 'naive-ui';
import { h } from 'vue';
import { CrawlerNode } from '@crawler-manage-share/utils';
export const columns = [
  {
    title: '节点名称',
    key: 'name',
    width: 60,
  },
  {
    title: '节点类型',
    key: 'type',
    width: 60,
  },
  {
    title: '语言',
    key: 'proxyLanguage',
    width: 80,
    render(row: CrawlerNode) {
      if (row.proxyLanguage === 'javascript') {
        return h(NTag, { type: 'success' }, { default: () => row.proxyLanguage });
      } else {
        return h(NTag, { type: 'info' }, { default: () => row.proxyLanguage });
      }
    },
  },
  {
    title: '节点描述',
    key: 'description',
    width: 100,
  },
  {
    title: '节点地址',
    key: 'url',
    width: 120,
  },
  {
    title: '状态',
    key: 'status',
    width: 60,
    render(row: CrawlerNode) {
      if (row.status === 'online') {
        return h(NTag, { type: 'success' }, { default: () => row.status });
      } else {
        return h(NTag, { type: 'error' }, { default: () => row.status });
      }
    },
  },
  {
    title: '系统信息',
    key: 'systemInfo',
    width: 100,
    render(row: CrawlerNode) {
      const systemInfo = row.systemInfo!;
      return h(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          },
        },
        [
          h('div', {}, { default: () => `CPU: ${systemInfo.cpuUsage.toFixed(2)}%` }),
          h('div', {}, { default: () => `内存: ${systemInfo.memoryUsage.toFixed(2)}%` }),
          h('div', {}, { default: () => `进程CPU: ${systemInfo.processCpuUsage.toFixed(2)}%` }),
        ]
      );
    },
  },
];
