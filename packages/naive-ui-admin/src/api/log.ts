import { http } from '@/utils/http/axios';
export function getLogList() {
  return http.request({
    url: '/log/list',
    method: 'POST',
  });
}

export function createLog(params) {
  return http.request({
    url: '/log/create',
    method: 'POST',
    params,
  });
}
