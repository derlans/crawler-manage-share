import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { PageEnum } from './type'

const HomeRouter: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.REGISTER,
  meta: {
    title: 'Root',
  },
}
const CrawlerRunRouter: RouteRecordRaw = {
  path: PageEnum.CRAWLER_RUN,
  name: 'crawler-run',
  component: () => import('@/pages/crawler/run/crawler-run.vue'),
  meta: {
    title: '爬虫执行',
  },
}
const RegisterRouter: RouteRecordRaw = {
  path: PageEnum.REGISTER,
  name: 'Register',
  component: () => import('@/pages/user/register-index.vue'),
  meta: {
    title: '注册',
  },
}
const LoginRouter: RouteRecordRaw = {
  path: PageEnum.LOGIN,
  name: 'Login',
  component: () => import('@/pages/user/login-index.vue'),
  meta: {
    title: '登录',
  },
}
const constantRouter = [
  HomeRouter,
  CrawlerRunRouter,
  RegisterRouter,
  LoginRouter,
]
const router = createRouter({
  history: createWebHistory(''),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
export default router
