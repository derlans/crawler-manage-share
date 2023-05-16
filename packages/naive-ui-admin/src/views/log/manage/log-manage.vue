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
      @update:checked-row-keys="onCheckedRow"
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

    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" title="新建">
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
  import { getLogList, getJsonFile } from '@/api/log';
  import { saveJsonFile } from '@/utils/save';
  import { FormSchema, useForm } from '@/components/Form';

  // const router = useRouter();
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
            label: '导出日志',
            onClick: async () => {
              const res = await getJsonFile(record._id);
              const data = res.data;
              saveJsonFile(data, record.name + '-log');
            },
          },
          {
            label: '导出数据',
            onClick: async () => {
              const res = await getJsonFile(record._id);
              const data = res.data.map((item) => {
                return item.data;
              });
              saveJsonFile(data, record.name + '-data');
            },
          },
          {
            label: '导出成功数据',
            onClick: async () => {
              const res = await getJsonFile(record._id);
              const data = res.data
                .filter((item) => {
                  return item.isSuccess;
                })
                .map((item) => {
                  return item.data;
                });
              saveJsonFile(data, record.name + '-success');
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
    return await getLogList({
      ...v,
      query: getFieldsValue(),
      startDate: getFieldsValue()['startDate'],
      endDate: getFieldsValue()['endDate'],
      fuzzyFields: ['name', 'description'],
    });
  };
  function onCheckedRow(rowKeys) {
    console.log(rowKeys);
  }

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
