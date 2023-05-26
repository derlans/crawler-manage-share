import { http } from '@/utils/http/axios';
export function getCrawlerNodeList() {
  return http.request({
    url: '/crawler-node/list',
    method: 'POST',
  });
}
