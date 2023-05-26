<template>
  <n-card :bordered="false" class="proCard">
    <n-descriptions :bordered="true" :column="4" class="m-4">
      <n-descriptions-item label="项目名称">{{ projectDetail.name }}</n-descriptions-item>
      <n-descriptions-item label="项目描述">{{ projectDetail.description }}</n-descriptions-item>
      <n-descriptions-item label="创建时间">{{
        new Date(projectDetail.createdAt).toLocaleString()
      }}</n-descriptions-item>
      <n-descriptions-item label="更新时间">{{
        new Date(projectDetail.updatedAt).toLocaleString()
      }}</n-descriptions-item>
    </n-descriptions>
    <BasicTable
      :columns="columns"
      :request="loadDataTable"
      :row-key="(row) => row.name"
      ref="actionRef"
      :actionColumn="actionColumn"
      :scroll-x="1090"
    >
      <template #tableTitle>
        <n-button type="primary" @click="() => addTable('javascript')" style="margin-right: 10px">
          <template #icon>
            <n-icon>
              <PlusOutlined />
            </n-icon>
          </template>
          新建javascript爬虫模板
        </n-button>
        <n-button type="success" @click="() => addTable('python')">
          <template #icon>
            <n-icon>
              <PlusOutlined />
            </n-icon>
          </template>
          新建python爬虫模板
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
      <crawler-edit v-model:value="crawlerForm" :key="crawlerForm.language" />
      <template #action>
        <n-space>
          <n-button @click="() => (showModal = false)">取消</n-button>
          <n-button type="info" :loading="formBtnLoading" @click="confirmForm">确定</n-button>
        </n-space>
      </template>
    </n-modal>
    <n-modal
      v-model:show="showCrawlerModal"
      :show-icon="false"
      preset="dialog"
      title="运行爬虫"
      style="width: 90vw; margin: 50px auto"
    >
      <crawler-run :value="crawlerRunForm" :projectid="projectId" :key="projectId" />
      <template #action>
        <n-space>
          <n-button @click="() => (showCrawlerModal = false)">取消</n-button>
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
    defaultCrawlerSchemaMap,
  } from '@crawler-manage-share/utils';
  import crawlerEdit from '@/views/crawler/crawler-edit.vue';
  import crawlerRun from '@/views/crawler/crawler-run.vue';
  import { useDialog } from 'naive-ui';
  const router = useRouter();
  const { id } = router.currentRoute.value.params;
  const projectId = (Array.isArray(id) ? id[0] : id) as string;
  const projectDetail = ref<{
    crawlerList: CrawlerSchema[];
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  }>({} as any);
  const actionRef = ref();
  const dialog = useDialog();
  const crawlerForm = ref(defaultCrawlerSchema);
  const crawlerRunForm = ref(defaultCrawlerSchema);
  const showModal = ref(false);
  const showCrawlerModal = ref(false);
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
              // 确认删除
              dialog.warning({
                title: '删除',
                content: '确认删除吗？',
                positiveText: '确定',
                negativeText: '取消',
                onPositiveClick: async () => {
                  const filterList = projectDetail.value.crawlerList.filter(
                    (item) => item.name !== record.name
                  );
                  await updateCrawlerList(filterList);
                  actionRef.value.reload();
                },
              });
            },
          },
          {
            label: '更新',
            onClick: () => {
              showModal.value = true;
              crawlerForm.value = record;
            },
          },
          {
            label: '创建爬虫',
            onClick: () => {
              showCrawlerModal.value = true;
              crawlerRunForm.value = record;
            },
          },
        ],
      });
    },
  });

  function addTable(type: typeof crawlerForm.value.language) {
    showModal.value = true;
    crawlerForm.value = { ...defaultCrawlerSchemaMap[type] };
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
    // 检查code是不是fnstring
    if (
      crawlerForm.value.language === 'javascript' &&
      !isAsyncFunctionString(crawlerForm.value.code)
    ) {
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
