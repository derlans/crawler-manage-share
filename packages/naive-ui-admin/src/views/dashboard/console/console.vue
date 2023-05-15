<template>
  <div class="console">
    <!--数据卡片-->
    <n-grid cols="1 s:2 m:3 l:4 xl:4 2xl:4" responsive="screen" :x-gap="12" :y-gap="8">
      <n-grid-item>
        <NCard
          title="爬虫统计"
          :segmented="{ content: true, footer: true }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="default">周</n-tag>
          </template>
          <div class="py-1 px-1 flex justify-between">
            <n-skeleton v-if="loading" :width="100" size="medium" />
            <CountTo v-else :startVal="0" :endVal="data.crawler.lastWeekCount" class="text-3xl" />
          </div>
          <div class="py-1 px-1 flex justify-between">
            <div class="text-sn">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                日
                <CountTo :startVal="0" :endVal="data.crawler.lastDayCount" />
              </template>
            </div>
            <div class="text-sn">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                月
                <CountTo :startVal="0" :endVal="data.crawler.lastMonthCount" />
              </template>
            </div>
          </div>
          <template #footer>
            <div class="flex justify-between">
              <n-skeleton v-if="loading" text :repeat="2" />
              <template v-else>
                <div class="text-sn"> 总爬虫量： </div>
                <div class="text-sn">
                  <CountTo :startVal="0" :endVal="data.crawler.totalCount" />
                </div>
              </template>
            </div>
          </template>
        </NCard>
      </n-grid-item>
      <n-grid-item>
        <NCard
          title="项目统计"
          :segmented="{ content: true, footer: true }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="primary">月</n-tag>
          </template>
          <div class="py-1 px-1 flex justify-between">
            <n-skeleton v-if="loading" :width="100" size="medium" />
            <CountTo v-else :startVal="0" :endVal="data.project.lastMonthCount" class="text-3xl" />
          </div>
          <div class="py-1 px-1 flex justify-between">
            <div class="text-sn">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                日
                <CountTo :startVal="0" :endVal="data.project.lastDayCount" />
              </template>
            </div>
            <div class="text-sn">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                周
                <CountTo :startVal="0" :endVal="data.project.lastWeekCount" />
              </template>
            </div>
          </div>
          <template #footer>
            <div class="flex justify-between">
              <n-skeleton v-if="loading" text :repeat="2" />
              <template v-else>
                <div class="text-sn"> 总项目量： </div>
                <div class="text-sn">
                  <CountTo :startVal="0" :endVal="data.project.totalCount" />
                </div>
              </template>
            </div>
          </template>
        </NCard>
      </n-grid-item>
      <n-grid-item>
        <NCard
          title="任务统计"
          :segmented="{ content: true, footer: true }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="success">日</n-tag>
          </template>
          <div class="py-1 px-1 flex justify-between">
            <n-skeleton v-if="loading" :width="100" size="medium" />
            <CountTo v-else :startVal="0" :endVal="data.log.lastDayCount" class="text-3xl" />
          </div>
          <div class="py-1 px-1 flex justify-between">
            <div class="text-sn">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                月
                <CountTo :startVal="0" :endVal="data.log.lastMonthCount" />
              </template>
            </div>
            <div class="text-sn">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                周
                <CountTo :startVal="0" :endVal="data.log.lastWeekCount" />
              </template>
            </div>
          </div>
          <template #footer>
            <div class="flex justify-between">
              <n-skeleton v-if="loading" text :repeat="2" />
              <template v-else>
                <div class="text-sn"> 总任务量： </div>
                <div class="text-sn">
                  <CountTo :startVal="0" :endVal="data.log.totalCount" />
                </div>
              </template>
            </div>
          </template>
        </NCard>
      </n-grid-item>
      <n-grid-item>
        <NCard
          title="结果统计"
          :segmented="{ content: true, footer: true }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="warning">日</n-tag>
          </template>
          <div class="py-1 px-1 flex justify-between">
            <n-skeleton v-if="loading" :width="100" size="medium" />
            <template v-else>
              <n-tag type="success">成功数:</n-tag>
              <CountTo
                :startVal="0"
                :endVal="data.log.resultCountLastDay.successCount"
                class="text-2xl"
              />
              <n-tag type="error">失败数:</n-tag>
              <CountTo
                :startVal="0"
                :endVal="data.log.resultCountLastDay.failCount"
                class="text-2xl"
              />
            </template>
          </div>
          <template #footer>
            <div class="flex justify-between">
              <n-skeleton v-if="loading" text :repeat="2" />
              <template v-else>
                <div class="text-sn"> 今日总结果数： </div>
                <div class="text-sn">
                  <CountTo :startVal="0" :endVal="data.log.resultCountLastDay.count" />
                </div>
              </template>
            </div>
            <div class="flex justify-between">
              <n-skeleton v-if="loading" text :repeat="2" />
              <template v-else>
                <div class="text-sn"> 周总结果数： </div>
                <div class="text-sn">
                  <CountTo :startVal="0" :endVal="data.log.resultCountLastWeek.count" />
                </div>
              </template>
            </div>
            <div class="flex justify-between">
              <n-skeleton v-if="loading" text :repeat="2" />
              <template v-else>
                <div class="text-sn"> 月总结果数： </div>
                <div class="text-sn">
                  <CountTo :startVal="0" :endVal="data.log.resultCountLastMonth.count" />
                </div>
              </template>
            </div>
          </template>
        </NCard>
      </n-grid-item>
    </n-grid>

    <!--访问量 | 流量趋势-->
    <VisiTab />
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { getConsoleInfo } from '@/api/dashboard/console';
  import VisiTab from './components/VisiTab.vue';
  import { NTag } from 'naive-ui';
  import { CountTo } from '@/components/CountTo/index';

  const loading = ref(true);
  const data = ref<any>({});

  onMounted(async () => {
    const res = await getConsoleInfo();
    data.value = res;
    loading.value = false;
  });
</script>

<style lang="less" scoped></style>
