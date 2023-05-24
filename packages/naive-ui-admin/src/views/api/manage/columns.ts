import { updateApi } from '@/api/api';
import { NSwitch } from 'naive-ui';
import { h } from 'vue';

export const columns = [
  {
    title: '名称',
    key: 'name',
    width: 100,
  },
  {
    title: '描述',
    key: 'description',
    width: 160,
  },
  {
    title: '创建日期',
    key: 'createdAt',
    width: 160,
    render(row) {
      return new Date(row.createdAt).toLocaleString();
    },
  },
  {
    title: '是否公开',
    key: 'public',
    width: 100,
    render(row) {
      return h(NSwitch, {
        checked: row.public,
        onUpdateValue: async (value) => {
          await updateApi({
            id: row._id,
            public: value,
          });
          window['$message'].success('更新成功');
        },
      });
    },
  },
];
