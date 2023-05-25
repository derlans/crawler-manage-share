import { http } from '@/utils/http/axios';

export function getCommunityProjectList(params) {
  return http.request({
    url: '/community/project/list',
    method: 'POST',
    params,
  });
}

export function getCommunityApiList(params) {
  return http.request({
    url: '/community/api/list',
    method: 'POST',
    params,
  });
}

export function favoriteCommunityApi(params) {
  return http.request({
    url: '/community/api/favorite',
    method: 'POST',
    params,
  });
}

export function unfavoriteCommunityApi(params) {
  return http.request({
    url: '/community/api/unfavorite',
    method: 'POST',
    params,
  });
}

export function likeCommunityApi(params) {
  return http.request({
    url: '/community/api/like',
    method: 'POST',
    params,
  });
}

export function unlikeCommunityApi(params) {
  return http.request({
    url: '/community/api/unlike',
    method: 'POST',
    params,
  });
}

export function favoriteCommunityProject(params) {
  return http.request({
    url: '/community/project/favorite',
    method: 'POST',
    params,
  });
}

export function unfavoriteCommunityProject(params) {
  return http.request({
    url: '/community/project/unfavorite',
    method: 'POST',
    params,
  });
}

export function likeCommunityProject(params) {
  return http.request({
    url: '/community/project/like',
    method: 'POST',
    params,
  });
}

export function unlikeCommunityProject(params) {
  return http.request({
    url: '/community/project/unlike',
    method: 'POST',
    params,
  });
}
