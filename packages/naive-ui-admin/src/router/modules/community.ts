import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { CommentOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.keepAlive 缓存该路由
 * @param meta.sort 排序越小越排前
 *
 * */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/community',
    name: 'Community',
    redirect: '/community/project',
    component: Layout,
    meta: {
      title: '社区',
      icon: renderIcon(CommentOutlined),
      sort: 7,
    },
    children: [
      {
        path: 'project',
        name: 'community-project',
        meta: {
          title: '社区-项目',
        },
        component: () => import('@/views/community/project/community-project.vue'),
      },
      {
        path: 'api',
        name: 'community-api',
        meta: {
          title: '社区-api文档',
        },
        component: () => import('@/views/community/api/community-api.vue'),
      },
    ],
  },
];

export default routes;
