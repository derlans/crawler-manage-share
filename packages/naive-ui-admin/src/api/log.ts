import { http } from '@/utils/http/axios';
export function getLogList(params: FindOptions) {
  return http.request({
    url: '/log/list',
    method: 'POST',
    params,
  });
}

export function createLog(params) {
  return http.request({
    url: '/log/create',
    method: 'POST',
    params,
  });
}

export function getLogDetail(params) {
  return http.request({
    url: '/log/detail',
    method: 'POST',
    params,
  });
}

export function getJsonFile(fileName) {
  return http.request(
    {
      url: `/file/json?fileName=${fileName}`,
      method: 'GET',
    },
    {
      isTransformResponse: true,
      isReturnNativeResponse: true,
    }
  );
}
