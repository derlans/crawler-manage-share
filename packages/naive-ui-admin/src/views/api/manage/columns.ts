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
    title: '更新日期',
    key: 'updatedAt',
    width: 160,
    render(row) {
      return new Date(row.updatedAt).toLocaleString();
    },
  },
];
