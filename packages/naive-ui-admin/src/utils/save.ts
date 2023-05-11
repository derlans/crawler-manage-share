// 保存json文件
export function saveJsonFile(json: object | string, fileName = 'data') {
  const v = typeof json === 'string' ? json : JSON.stringify(json);
  const blob = new Blob([v], { type: 'application/json' });
  const a = document.createElement('a');
  a.download = fileName + '.json';
  a.href = URL.createObjectURL(blob);
  a.click();
  URL.revokeObjectURL(a.href);
}
