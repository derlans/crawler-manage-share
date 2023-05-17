<template>
  <div>
    <n-descriptions :bordered="true" :column="2" class="m-4">
      <n-descriptions-item label="名称">{{ apiDetail.name }}</n-descriptions-item>
      <n-descriptions-item label="描述">{{ apiDetail.description }}</n-descriptions-item>
      <n-descriptions-item label="文档">
        <div v-html="apiDetail.detail"></div>
      </n-descriptions-item>
    </n-descriptions>
    <SwaggerUi :value="apiDetail.swagger" />
  </div>
</template>

<script lang="ts" setup>
  import SwaggerUi from '@/components/Swagger/swagger-ui.vue';
  import { ref } from 'vue';
  import { getApiDetail } from '@/api/api';
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const id = ref(route.params.id);
  const apiDetail = ref({} as any);
  const getApiDetailData = async () => {
    const res = await getApiDetail({ _id: id.value });
    apiDetail.value = res;
  };
  getApiDetailData();
</script>

<style lang="less" scoped></style>
