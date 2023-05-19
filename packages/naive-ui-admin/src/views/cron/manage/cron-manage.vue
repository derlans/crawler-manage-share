<template>
  <n-card :bordered="false" class="proCard">
    <BasicForm @register="register" @submit="handleSubmit">
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
      <template #tableTitle>
        <n-button type="primary">
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

    <n-modal v-model:show="showModal" :show-icon="false" preset="diacron" title="新建">
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
  import { getCronList, stopCron, startCron } from '@/api/cron';
  // import { saveJsonFile } from '@/utils/save';
  import { FormSchema, useForm } from '@/components/Form';
  import { useRouter } from 'vue-router';
  import { getJsonFile } from '@/api/log';
  import { saveJsonFile } from '@/utils/save';

  const router = useRouter();
  // const message = useMessage();
  const actionRef = ref();

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
            label: '启用',
            type: 'primary',
            style: 'margin-right: 10px;',
            onClick: async () => {
              if (record.status === 1) {
                window['$message'].error('任务正在进行中');
                return;
              }
              await startCron({ _id: record._id });
              reloadTable();
            },
          },
          {
            label: '停止',
            type: 'error',
            style: 'margin-right: 10px;',
            onClick: async () => {
              if (record.status === 0) {
                window['$message'].error('任务已停止');
                return;
              }
              await stopCron({ _id: record._id });
              reloadTable();
            },
          },
          {
            label: '查看相关日志',
            type: 'info',
            style: 'margin-right: 10px;',
            onClick: async () => {
              router.push({
                name: 'log-manage',
                query: {
                  cronid: record._id,
                },
              });
            },
          },
          {
            label: '分批下载日志',
            type: 'success',
            style: 'margin-right: 10px;',
            onClick: async () => {
              const logList = record.logList;
              for (let i = 0; i < logList.length; i++) {
                const log = logList[i];
                const res = await getJsonFile(log);
                const data = res.data;
                await saveJsonFile(data, record.name + log + '-log');
              }
            },
          },
          {
            label: '下载日志',
            type: 'warning',
            onClick: async () => {
              const logList = record.logList;
              const data = await Promise.all(
                logList.map(async (log) => {
                  const res = await getJsonFile(log);
                  return res.data;
                })
              );
              await saveJsonFile(data, record.name + '-log');
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
      label: '任务名',
      componentProps: {
        placeholder: '任务名',
      },
      rules: [{ required: false, message: '请输入任务名', trigger: ['blur'] }],
    },
    // 状态
    {
      field: 'status',
      component: 'NSelect',
      label: '状态',
      defaultValue: 1,
      componentProps: {
        placeholder: '状态',
        options: [
          { label: '已启用', value: 1 },
          { label: '已停止', value: 0 },
        ],
      },
      rules: [{ required: false, message: '请选择状态' }],
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
    return await getCronList({
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
  }
  function handleSubmit() {
    reloadTable();
  }
</script>

<style lang="less" scoped></style>
