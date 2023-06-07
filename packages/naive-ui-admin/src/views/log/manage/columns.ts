import { NTag } from 'naive-ui';
import { h } from 'vue';

export const columns = [
  {
    title: '任务名',
    key: 'name',
    width: 100,
  },
  {
    title: '创建时间',
    key: 'createdAt',
    width: 100,
    render(row) {
      return new Date(row.createdAt).toLocaleString();
    },
  },
  {
    title: '总耗时(s)',
    key: 'totalTime',
    width: 60,
    render(row: any) {
      return (new Date(row.endTime).getTime() - new Date(row.createdAt).getTime()) / 1000;
    },
  },
  {
    title: '状态',
    key: 'status',
    width: 60,
    render(row: any) {
      if (row.status === 1) {
        return h(NTag, { type: 'info' }, () => '运行中');
      }
      if (row.status === 2) {
        return h(NTag, { type: 'success' }, () => '已完成');
      }
      if (row.status === 3) {
        return h(NTag, { type: 'warning' }, () => '失败');
      }
    },
  },

  {
    title: '结果数',
    key: 'resultCount',
    width: 50,
  },
  {
    title: '成功数',
    key: 'successCount',
    width: 50,
  },
  {
    title: '失败数',
    key: 'failCount',
    width: 50,
  },
  {
    title: '结果大小',
    key: 'resultSize',
    width: 50,
    render(row: any) {
      return `${(row.resultSize / 1024).toFixed(2)}kb`;
    },
  },
];
