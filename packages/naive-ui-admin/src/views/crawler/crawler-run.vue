<template>
  <div class="w-[80vw]">
    <n-spin :show="showLoading">
      <n-descriptions :bordered="true" :column="2" class="m-4">
        <n-descriptions-item label="爬虫名称">{{ form.name }}</n-descriptions-item>
        <n-descriptions-item label="爬虫描述">{{ form.description }}</n-descriptions-item>
      </n-descriptions>
      <n-form>
        <n-form-item label="爬虫代码" path="fnString" v-if="false">
          <codemirror
            disabled
            v-model="form.fn"
            :style="{ height: '300px', width: '100%' }"
            :autofocus="true"
            :indent-with-tab="true"
            :tab-size="2"
            :extensions="jsExtensions"
          />
        </n-form-item>
        <n-form-item label="运行选项">
          <span class="ml-5 mr-1">是否使用自定义输入</span>
          <n-switch v-model:value="runOptions.useCustomInput" />
          <span class="ml-5 mr-1">超时时间(ms)</span>
          <n-input-number v-model:value="runOptions.timeout" :step="500" />
          <span class="ml-5 mr-1">重试次数</span>
          <n-input-number v-model:value="runOptions.retry" />
          <span class="ml-5 mr-1">并发数</span>
          <n-input-number v-model:value="runOptions.concurrency" />
        </n-form-item>
        <n-form-item label="创建选项">
          <span class="ml-5 mr-1">任务名称</span>
          <n-input v-model:value="crawlerRunName" :style="{ width: '200px' }" />
        </n-form-item>

        <div v-show="runOptions.useCustomInput" class="items-center flex justify-between">
          <div :style="{ width: '35%' }">
            <span>自定义输入参数1</span>
            <codemirror
              v-model="customInput.params1"
              :style="{ height: '500px' }"
              placeholder="自定义输入参数"
              :autofocus="true"
              :indent-with-tab="true"
              :tab-size="2"
              :extensions="jsonExtensions"
            />
          </div>
          <div :style="{ width: '35%' }">
            <span>自定义输入参数2</span>
            <codemirror
              v-model="customInput.params2"
              :style="{ height: '500px' }"
              placeholder="自定义输入参数"
              :autofocus="true"
              :indent-with-tab="true"
              :tab-size="2"
              :extensions="jsonExtensions"
            />
          </div>
          <div :style="{ width: '25%' }">
            <span>通用参数</span>
            <codemirror
              v-model="customInput.commonParams"
              placeholder="通用参数"
              :style="{ height: '500px' }"
              :autofocus="true"
              :indent-with-tab="true"
              :tab-size="2"
              :extensions="jsonExtensions"
            />
          </div>
        </div>
        <div v-show="!runOptions.useCustomInput">
          <n-form-item label="运行参数">
            <div class="w-[100%] border-red-500 border-2 p-6">
              <vue-form :schema="schema" v-model="userParams" />
            </div>
          </n-form-item>
          <n-form-item label="运行范围">
            <n-input-number v-model:value="range.start" />
            <span class="mx-2">-</span>
            <n-input-number v-model:value="range.end" />
          </n-form-item>
        </div>
        <n-form-item label="最终运行参数" path="resultParams">
          <codemirror
            disabled
            v-model="resultParams"
            :style="{ height: '300px', width: '100%' }"
            :autofocus="true"
            :indent-with-tab="true"
            :tab-size="2"
            :extensions="jsonExtensions"
          />
        </n-form-item>
        <n-form-item label="试运行结果" path="tryResult">
          <codemirror
            disabled
            v-model="tryResult"
            :style="{ height: '300px', width: '100%' }"
            :autofocus="true"
            :indent-with-tab="true"
            :tab-size="2"
            :extensions="jsonExtensions"
          />
        </n-form-item>
        <n-form-item>
          <n-button type="primary" @click="runCrawler">试运行</n-button>
          <span class="mr-6"></span>
          <n-button type="success" @click="saveTryResult">保存试运行结果</n-button>
          <span class="mr-6"></span>
          <n-button type="warning" @click="createCrawler">创建爬虫</n-button>
        </n-form-item>
      </n-form>
    </n-spin>
  </div>
</template>

<script lang="ts" setup>
  import { toRef, computed, ref } from 'vue';
  import { NButton } from 'naive-ui';
  import { Codemirror } from 'vue-codemirror';
  import { javascript } from '@codemirror/lang-javascript';
  import { json } from '@codemirror/lang-json';
  import { oneDark } from '@codemirror/theme-one-dark';
  import { NForm } from 'naive-ui';
  import VueForm from '@lljj/vue3-form-naive';
  import { saveJsonFile } from '@/utils/save';
  import { createCrawler as createCrawlerReq } from '@/api/crawler';

  import axios from 'axios';
  import { Crawler, generateParams, generateParamsByRange } from '@crawler-manage-share/utils';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const envParams = {
    axios,
  };
  const Props = defineProps<{
    value: {
      name: string;
      description: string;
      fn: string;
      userParamsSchema: string;
    };
    projectid?: string;
  }>();
  const jsExtensions = [javascript(), oneDark];
  const jsonExtensions = [json(), oneDark];
  const form = toRef(Props, 'value');
  const showLoading = ref(false);
  const schema = computed(() => {
    try {
      return JSON.parse(form.value.userParamsSchema);
    } catch (error) {
      return {};
    }
  });
  const userParams = ref({});
  const crawlerRunName = ref(Props.value.name + '任务1');
  const crawler = new Crawler(form.value.fn as any, { envParams });
  const range = ref({ start: 0, end: 0 });
  const runOptions = ref({ concurrency: 2, useCustomInput: false, timeout: 10000, retry: 0 });
  const customInput = ref({
    commonParams: JSON.stringify({ q: 'test' }, null, 2),
    params1: JSON.stringify([{ page: 1 }, { page: 2 }], null, 2),
    params2: JSON.stringify([{ q: '测试' }, { q: '信管' }], null, 2),
  });
  const tryResult = ref('');
  const allUserParams = computed(() => {
    if (runOptions.value.useCustomInput) {
      try {
        const commonParams = JSON.parse(customInput.value.commonParams);
        const params1 = JSON.parse(customInput.value.params1);
        const params2 = JSON.parse(customInput.value.params2);
        return generateParams({
          commonParams,
          params1,
          params2,
        });
      } catch (error) {
        return [];
      }
    }
    return generateParamsByRange(userParams.value, range.value);
  });
  const resultParams = computed(() => {
    return JSON.stringify(allUserParams.value, null, 2);
  });
  const runCrawler = async () => {
    showLoading.value = true;
    const res = await crawler.run({
      concurrency: runOptions.value.concurrency,
      allUserParams: allUserParams.value.slice(0, 100),
      timeout: runOptions.value.timeout,
    });
    showLoading.value = false;
    tryResult.value = JSON.stringify(res, null, 2);
  };
  const saveTryResult = () => {
    saveJsonFile(tryResult.value, '测试结果');
  };
  // 创建爬虫
  const createCrawler = async () => {
    await createCrawlerReq({
      name: crawlerRunName.value,
      project: Props.projectid,
      crawler: Props.value,
      runOptions: {
        ...runOptions.value,
        allUserParams: allUserParams.value,
      },
    });
    router.replace({ name: 'crawler-manage' });
  };
</script>

<style lang="less" scoped></style>
