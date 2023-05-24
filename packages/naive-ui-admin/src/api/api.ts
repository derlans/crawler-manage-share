import { http } from '@/utils/http/axios';
export function getApiList(params: FindOptions) {
  return http.request({
    url: '/api/list',
    method: 'POST',
    params,
  });
}

export function createApi(params) {
  return http.request({
    url: '/api/create',
    method: 'POST',
    params,
  });
}
// getApiDetail
export function getApiDetail(params) {
  return http.request({
    url: '/api/detail',
    method: 'POST',
    params,
  });
}

export function updateApi(params) {
  return http.request({
    url: '/api/update',
    method: 'POST',
    params,
  });
}
