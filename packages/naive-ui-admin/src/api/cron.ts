import { http } from '@/utils/http/axios';
export function getCronList(params: FindOptions) {
  return http.request({
    url: '/cron/list',
    method: 'POST',
    params,
  });
}

export function createCron(params) {
  return http.request({
    url: '/cron/create',
    method: 'POST',
    params,
  });
}
// getCronDetail
export function getCronDetail(params) {
  return http.request({
    url: '/cron/detail',
    method: 'POST',
    params,
  });
}

export function stopCron(params) {
  return http.request({
    url: '/cron/stop',
    method: 'POST',
    params,
  });
}

export function startCron(params) {
  return http.request({
    url: '/cron/start',
    method: 'POST',
    params,
  });
}
