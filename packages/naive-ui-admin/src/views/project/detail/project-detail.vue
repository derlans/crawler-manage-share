<template>
  <n-card :bordered="false" class="proCard">
    <BasicTable
      :columns="columns"
      :request="loadDataTable"
      :row-key="(row) => row.name"
      ref="actionRef"
      :actionColumn="actionColumn"
      :scroll-x="1090"
    >
      <template #tableTitle>
        <n-button type="primary" @click="addTable">
          <template #icon>
            <n-icon>
              <PlusOutlined />
            </n-icon>
          </template>
          新建
        </n-button>
      </template>

      <template #toolbar>
        <n-button type="primary" @click="reloadTable">刷新数据</n-button>
      </template>
    </BasicTable>

    <n-modal
      v-model:show="showModal"
      :show-icon="false"
      preset="dialog"
      title="新建"
      style="width: 90vw; margin: 50px auto"
    >
      <crawler-edit v-model:value="crawlerForm" />
      <template #action>
        <n-space>
          <n-button @click="() => (showModal = false)">取消</n-button>
          <n-button type="info" :loading="formBtnLoading" @click="confirmForm">确定</n-button>
        </n-space>
      </template>
    </n-modal>
  </n-card>
</template>

<script lang="ts" setup>
  import { h, reactive, ref } from 'vue';
  import { BasicTable, TableAction } from '@/components/Table';
  import { columns } from './columns';
  import { PlusOutlined } from '@vicons/antd';
  import { useRouter } from 'vue-router';
  import { updateProject, getProjectDetail } from '@/api/project';
  import {
    defaultCrawlerSchema,
    CrawlerSchema,
    isAsyncFunctionString,
  } from '@crawler-manage-share/utils';
  import crawlerEdit from '@/views/crawler/crawler-edit.vue';

  const router = useRouter();
  const { id: projectId } = router.currentRoute.value.params;
  const projectDetail = ref<{
    crawlerList: CrawlerSchema[];
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  }>({} as any);
  const actionRef = ref();

  const crawlerForm = ref(defaultCrawlerSchema);
  const showModal = ref(false);
  const formBtnLoading = ref(false);

  const actionColumn = reactive({
    width: 220,
    title: '操作',
    key: 'action',
    fixed: 'right',
    render(record) {
      return h(TableAction as any, {
        style: 'button',
        actions: [
          {
            label: '删除',
            onClick: async () => {
              const filterList = projectDetail.value.crawlerList.filter(
                (item) => item.name !== record.name
              );
              await updateCrawlerList(filterList);
              actionRef.value.reload();
            },
          },
          {
            label: '更新',
            onClick: () => {
              showModal.value = true;
              crawlerForm.value = record;
            },
          },
        ],
      });
    },
  });

  function addTable() {
    showModal.value = true;
  }

  const loadDataTable = async () => {
    const data = await getProjectDetail({ _id: projectId });
    projectDetail.value = data;
    return {
      list: data.crawlerList,
      total: data.crawlerList.length,
    };
  };

  function reloadTable() {
    actionRef.value.reload();
  }

  async function confirmForm(e) {
    e.preventDefault();
    if (!crawlerForm.value.name) {
      window['$message'].error('请输入爬虫名称');
      return;
    }
    // 检查fn是不是fnstring
    if (!isAsyncFunctionString(crawlerForm.value.fn)) {
      window['$message'].error('爬虫代码格式错误');
      return;
    }
    // 检查userParamsSchema格式
    try {
      JSON.parse(crawlerForm.value.userParamsSchema);
    } catch (error) {
      window['$message'].error('自定义用户参数格式错误');
      return;
    }
    formBtnLoading.value = true;
    const crawlerList = [...projectDetail.value.crawlerList];
    // 如果名字重复，更新
    const index = crawlerList.findIndex((item) => item.name === crawlerForm.value.name);
    if (index > -1) {
      crawlerList[index] = crawlerForm.value;
    } else {
      crawlerList.push(crawlerForm.value);
    }
    await updateCrawlerList(crawlerList);
    formBtnLoading.value = false;
    showModal.value = false;
    actionRef.value.reload();
  }
  async function updateCrawlerList(list: CrawlerSchema[]) {
    projectDetail.value.crawlerList = list;
    await updateProject({
      _id: projectId,
      crawlerList: list,
    });
    window['$message'].success('更新成功');
  }
</script>

<style lang="less" scoped></style>
