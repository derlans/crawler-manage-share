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
    <div class="mt-4" v-if="!loading">
      <NRow :gutter="24">
        <NCol :span="24">
          <n-card content-style="padding: 0;" :bordered="false">
            <n-tabs type="line" size="large" :tabs-padding="20" pane-style="padding: 20px;">
              <n-tab-pane name="折线图">
                <TaskResult :value="data.log.countByDayLastMonth" />
              </n-tab-pane>
              <n-tab-pane name="任务名:任务数量">
                <TaskPie
                  :value="
                    data.log.countByName.map((v) => {
                      return { value: v.count, name: v._id };
                    })
                  "
                  name="任务名:任务数量"
                />
              </n-tab-pane>
              <n-tab-pane name="任务名:结果数量">
                <TaskPie
                  :value="
                    data.log.countByName.map((v) => {
                      return { value: v.resultCount, name: v._id };
                    })
                  "
                  name="任务名:结果数量"
                />
              </n-tab-pane>
              <n-tab-pane name="任务名:结果大小">
                <TaskPie
                  :value="
                    data.log.countByName.map((v) => {
                      return { value: v.resultSizeCount, name: v._id };
                    })
                  "
                  name="任务名:结果大小"
                />
              </n-tab-pane>
              <n-tab-pane name="任务状态:任务数量">
                <TaskPie
                  :value="
                    data.log.countByStatus.map((v) => {
                      return { value: v.count, name: statusMap[v._id] };
                    })
                  "
                  name="任务状态:任务数量"
                />
              </n-tab-pane>
            </n-tabs>
          </n-card>
        </NCol>
      </NRow>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { getConsoleInfo } from '@/api/dashboard/console';
  import { NTag } from 'naive-ui';
  import { CountTo } from '@/components/CountTo/index';
  import TaskResult from './components/TaskResult.vue';
  import TaskPie from './components/TaskPie.vue';
  const statusMap = {
    1: '进行中',
    2: '已完成',
    3: '已失败',
  };
  const loading = ref(true);
  const data = ref<any>({});
  onMounted(async () => {
    const res = await getConsoleInfo();
    data.value = res;
    loading.value = false;
  });
</script>

<style lang="less" scoped></style>
