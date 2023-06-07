<template>
  <n-card :bordered="false" class="proCard">
    <BasicForm @register="register" @submit="reloadTable">
      <template #statusSlot="{ model, field }">
        <n-input v-model:value="model[field]" />
      </template>
    </BasicForm>
    <BasicTable
      :columns="columns"
      :request="loadDataTable"
      :row-key="(row) => row.id"
      ref="actionRef"
      :actionColumn="actionColumn"
      :scroll-x="1090"
    >
      <template #toolbar>
        <n-button type="primary" @click="reloadTable">刷新数据</n-button>
      </template>
    </BasicTable>

    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" title="新建定时任务">
      <!-- crom form -->
      <n-form>
        <n-form-item label="名称" label-width="100px">
          <n-input v-model:value="cronForm.name" />
        </n-form-item>
        <n-form-item label="定时表达式" label-width="100px">
          <n-input v-model:value="cronForm.schedule" />
        </n-form-item>
        <n-form-item label="描述" label-width="100px">
          <n-input v-model:value="cronForm.description" />
        </n-form-item>
      </n-form>
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
  import { getCrawlerList, deleteCrawler } from '@/api/crawler';
  import { createLog } from '@/api/log';
  import { useRouter } from 'vue-router';
  import { FormSchema, useForm } from '@/components/Form';
  import { isCron } from '@crawler-manage-share/utils';
  import { createCron } from '@/api/cron';
  import { confirmDelete } from '@/utils/operate';
  const router = useRouter();
  // const message = useMessage();
  const actionRef = ref();

  const showModal = ref(false);
  const cronForm = ref({
    name: '',
    schedule: '',
    description: '',
    crawlerRun: '',
  });
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
            type: 'warning',
            style: 'margin-right: 10px;',
            onClick: async () => {
              // 提示有管理定时任务的时候不能删除
              await confirmDelete();
              window['$message'].error('请先删除关联定时任务');
              // await deleteCrawler({ _id: record._id });
            },
          },
          {
            label: '服务器运行',
            type: 'success',
            style: 'margin-right: 10px;',
            onClick: async () => {
              const { _id: logid } = await createLog({
                crawlerRun: record._id,
              });
              router.push({
                path: '/log/manage',
                query: {
                  id: logid,
                },
              });
            },
          },
          {
            label: '创建定时任务',
            type: 'info',
            style: 'margin-right: 10px;',
            onClick: async () => {
              showModal.value = true;
              cronForm.value.crawlerRun = record._id;
            },
          },
        ],
      });
    },
  });

  const schemas: FormSchema[] = [
    {
      field: 'name',
      component: 'NInput',
      label: '爬虫名',
      componentProps: {
        placeholder: '爬虫名',
      },
      rules: [{ required: false, message: '请输入爬虫名', trigger: ['blur'] }],
    },
    // startDate
    {
      field: 'startDate',
      component: 'NDatePicker',
      label: '开始日期',
      componentProps: {
        placeholder: '开始日期',
      },
      rules: [{ required: false, message: '请输入开始日期' }],
    },
    // endDate
    {
      field: 'endDate',
      component: 'NDatePicker',
      label: '结束日期',
      componentProps: {
        placeholder: '结束日期',
      },
      rules: [{ required: false, message: '请输入结束日期' }],
    },
  ];
  const [register, { getFieldsValue }] = useForm({
    gridProps: { cols: '1 s:1 m:2 l:3 xl:4 2xl:4' },
    labelWidth: 80,
    schemas,
  });
  const loadDataTable = async (v) => {
    return await getCrawlerList({
      ...v,
      query: getFieldsValue(),
      startDate: getFieldsValue()['startDate'],
      endDate: getFieldsValue()['endDate'],
      fuzzyFields: ['name', 'description'],
    });
  };

  function reloadTable() {
    actionRef.value.reload();
  }

  function confirmForm(e) {
    e.preventDefault();
    if (cronForm.value.name === '' || cronForm.value.description === '') {
      window['$message'].error('请填写完整');
      return;
    }
    debugger;
    if (!isCron(cronForm.value.schedule)) {
      window['$message'].error('定时表达式不正确');
      return;
    }
    formBtnLoading.value = true;
    createCron(cronForm.value)
      .then(() => {
        window['$message'].success('创建成功');
        formBtnLoading.value = false;
        showModal.value = false;
        router.push({
          name: 'cron-manage',
        });
      })
      .catch(() => {
        window['$message'].error('创建失败');
        formBtnLoading.value = false;
      });
  }
</script>

<style lang="less" scoped></style>
