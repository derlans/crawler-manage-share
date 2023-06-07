// 确认删除
export async function confirmDelete() {
  return new Promise((resolve, reject) => {
    const dialog = window['$dialog'];
    dialog.warning({
      title: '删除',
      content: '确认删除吗？',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        resolve(null);
      },
      onNegativeClick: () => {
        reject(null);
      },
    });
  });
}
