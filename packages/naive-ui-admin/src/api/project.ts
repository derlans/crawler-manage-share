import { http } from '@/utils/http/axios';
import { CrawlerSchema } from '@crawler-manage-share/utils';
export function getProjectList(params) {
  return http.request({
    url: '/project/list',
    method: 'POST',
    params,
  });
}

export function createProject(params) {
  return http.request({
    url: '/project/create',
    method: 'POST',
    params,
  });
}

export function getProjectDetail(params) {
  return http.request<{
    crawlerList: CrawlerSchema[];
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  }>({
    url: '/project/detail',
    method: 'POST',
    params,
  });
}

export function updateProject(params) {
  return http.request({
    url: '/project/update',
    method: 'POST',
    params,
  });
}
