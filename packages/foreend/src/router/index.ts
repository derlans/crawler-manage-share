import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { PageEnum } from './type'

const HomeRouter: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.CRAWLER_RUN,
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
const constantRouter = [HomeRouter, CrawlerRunRouter]
const router = createRouter({
  history: createWebHistory(''),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
export default router
