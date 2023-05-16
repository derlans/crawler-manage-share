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

// export function getCrawlerDetail(params) {
//   return http.request<{
//     crawlerList: CrawlerSchema[];
//     name: string;
//     description: string;
//     createdAt: string;
//     updatedAt: string;
//   }>({
//     url: '/crawler/detail',
//     method: 'POST',
//     params,
//   });
// }

export function updateCrawler(params) {
  return http.request({
    url: '/crawler/update',
    method: 'POST',
    params,
  });
}
