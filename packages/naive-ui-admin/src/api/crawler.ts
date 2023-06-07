import { http } from '@/utils/http/axios';
// import { CrawlerSchema } from '@crawler-manage-share/utils';
export function getCrawlerList(params: FindOptions) {
  return http.request({
    url: '/crawler/list',
    method: 'POST',
    params,
  });
}

export function createCrawler(params) {
  return http.request({
    url: '/crawler/create',
    method: 'POST',
    params,
  });
}

export function updateCrawler(params) {
  return http.request({
    url: '/crawler/update',
    method: 'POST',
    params,
  });
}

export function testRunCrawler(params) {
  return http.request({
    url: '/crawler/testRun',
    method: 'POST',
    params,
  });
}

export function deleteCrawler(params) {
  return http.request({
    url: '/crawler/delete',
    method: 'POST',
    params,
  });
}
