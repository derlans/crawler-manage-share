<template>
  <div style="width: 70vw">
    <NDescriptions :column="6" size="large" label-style="font-size:18px;color:blue;padding:10px 0;">
      <NDescriptionsItem label="名称" :span="3">
        {{ props.name }}
      </NDescriptionsItem>
      <NDescriptionsItem label="大小" :span="3">
        {{ analyseResult.size }}
      </NDescriptionsItem>
      <NDescriptionsItem label="key分析" :span="6">
        <div style="width: 90vw">
          <NDataTable :columns="dataTable.keyCountColumns" :data="dataTable.keyCountData" />
        </div>
      </NDescriptionsItem>
      <NDescriptionsItem label="类型分析" :span="6">
        <div style="width: 90vw">
          <NDataTable :columns="dataTable.typeCountColumns" :data="dataTable.typeCountData" />
        </div>
      </NDescriptionsItem>
      <NDescriptionsItem label="内容可视化" :span="6">
        <div style="width: 90vw">
          <iframe style="width: 100%; height: 90vh; border: none" :src="iframeUrl"></iframe>
        </div>
      </NDescriptionsItem>
      <NDescriptionsItem label="原始数据词云" :span="3">
        <div style="width: 40vw">
          <WordCloud :value="echartsData" name="" />
        </div>
      </NDescriptionsItem>
      <NDescriptionsItem label="纯汉字词云" :span="3">
        <div style="width: 40vw">
          <WordCloud :value="echartsDataChinese" name="" />
        </div>
      </NDescriptionsItem>
    </NDescriptions>
  </div>
</template>

<script lang="ts" setup>
  import * as jsonUtils from '@/utils/json';
  import { NDescriptions, NDescriptionsItem, NDataTable } from 'naive-ui';
  import { computed, ref, watch } from 'vue';
  import { getJieba } from '@/api/analyse';
  import WordCloud from './word-cloud.vue';
  const props = defineProps<{
    value: Record<string, any>;
    name?: string;
    fileurl: string;
  }>();
  const iframeUrl = computed(() => {
    return `http://127.0.0.1:5500/editor.html?url=${props.fileurl}`;
  });
  const analyseResult = computed(() => {
    return jsonUtils.analyseJson(props.value);
  });
  const dataTable = computed(() => {
    const keyCount = analyseResult.value.keyCount;
    const keyCountColumns = Object.keys(keyCount).map((key) => {
      return {
        key: key,
        title: key,
        width: 100,
      };
    });
    const keyCountData = [keyCount];
    const typeCount = analyseResult.value.typeCount;
    const typeCountColumns = Object.keys(typeCount).map((key) => {
      return {
        key: key,
        title: key,
        width: 100,
      };
    });
    const typeCountData = [typeCount];
    return {
      keyCountColumns,
      keyCountData,
      typeCountColumns,
      typeCountData,
    };
  });
  // 词频分析
  const wordCount = ref<{ word: string; weight: number }[]>([]);
  watch(
    () => props.value,
    async () => {
      const wordCountResult = await getJieba({ text: analyseResult.value.stringValues });
      wordCount.value = wordCountResult;
    },
    {
      immediate: true,
    }
  );
  const echartsData = computed(() => {
    return wordCount.value.map((item) => {
      return {
        name: item.word,
        value: item.weight,
      };
    });
  });
  // 纯汉字词频分析
  const echartsDataChinese = computed(() => {
    return wordCount.value
      .filter((item) => {
        return /^[\u4e00-\u9fa5]+$/.test(item.word);
      })
      .map((item) => {
        return {
          name: item.word,
          value: item.weight,
        };
      });
  });
</script>

<style lang="less" scoped></style>
