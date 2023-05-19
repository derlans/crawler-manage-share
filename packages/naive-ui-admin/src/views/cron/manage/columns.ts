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
    title: 'cron表达式',
    key: 'schedule',
    width: 100,
  },
  {
    title: '状态',
    key: 'status',
    width: 100,
    render(row: any) {
      if (row.status === 0) {
        return h(NTag, { type: 'warning' }, () => '停止');
      }
      if (row.status === 1) {
        return h(NTag, { type: 'success' }, () => '启用');
      }
    },
  },
];
