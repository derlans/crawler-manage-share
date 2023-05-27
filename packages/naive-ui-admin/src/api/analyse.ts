import { http } from '@/utils/http/axios';
export function getJieba(params) {
  return http.request({
    url: '/jieba',
    method: 'POST',
    params,
  });
}
