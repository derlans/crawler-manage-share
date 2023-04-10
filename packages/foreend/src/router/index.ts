import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { PageEnum } from './type'

const HomeRouter: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.ROOT,
  meta: {
    title: 'Root',
  },
}
const CrawlerRunRouter: RouteRecordRaw = {
  path: PageEnum.CRAWLER_RUN,
  name: 'Root',
  component: () => import('@/pages/crawler/run/crawler-run.vue'),
  meta: {
    title: '爬虫执行',
  },
}
const constantRouter = [HomeRouter, CrawlerRunRouter]
const router = createRouter({
  history: createWebHashHistory(''),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
export default router
