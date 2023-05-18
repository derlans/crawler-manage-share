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
  import { getCrawlerList } from '@/api/crawler';
  import { createLog } from '@/api/log';
  import { useRouter } from 'vue-router';
  import { FormSchema, useForm } from '@/components/Form';

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
            label: '删除',
            onClick: () => {
              // window['$message'].info(`您点击了，${record.name} 按钮`);
            },
          },
          {
            label: '服务器运行',
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
  }
</script>

<style lang="less" scoped></style>
