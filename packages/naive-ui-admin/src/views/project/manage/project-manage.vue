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

    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" title="新建">
      <n-form
        :model="formParams"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        :label-width="80"
        class="py-4"
      >
        <n-form-item label="名称" path="name">
          <n-input placeholder="请输入名称" v-model:value="formParams.name" />
        </n-form-item>
        <n-form-item label="描述" path="formParams">
          <n-input placeholder="请输入描述" v-model:value="formParams.description" />
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
  import { BasicForm, FormSchema, useForm } from '@/components/Form/index';
  import { columns } from './columns';
  import { PlusOutlined } from '@vicons/antd';
  import { useRouter } from 'vue-router';
  import { useDialog, type FormRules } from 'naive-ui';
  import { getProjectList, createProject, deleteProject } from '@/api/project';
  import { confirmDelete } from '@/utils/operate';

  const rules: FormRules = {
    name: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入名称',
    },
  };

  const schemas: FormSchema[] = [
    {
      field: 'name',
      component: 'NInput',
      label: '项目名',
      componentProps: {
        placeholder: '项目名',
      },
      rules: [{ required: false, message: '请输入项目名', trigger: ['blur'] }],
    },
    {
      field: 'description',
      component: 'NInput',
      label: '项目描述',
      componentProps: {
        placeholder: '项目描述',
      },
      rules: [{ required: false, message: '请输入项目描述', trigger: ['blur'] }],
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

  const router = useRouter();
  const formRef: any = ref(null);
  // const message = useMessage();
  const actionRef = ref();
  const dialog = useDialog();
  const showModal = ref(false);
  const formBtnLoading = ref(false);
  const formParams = reactive({
    name: '',
    description: '',
  });

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
            label: '详情',
            style: 'margin-right: 10px;',
            type: 'primary',
            onClick: () => router.push({ name: 'project-detail', params: { id: record._id } }),
          },
          {
            label: '删除',
            type: 'error',
            style: 'margin-right: 10px;',
            onClick: async () => {
              await confirmDelete();
              await deleteProject({ _id: record._id });
              actionRef.value.reload();
            },
          },
        ],
      });
    },
  });

  const [register, { getFieldsValue }] = useForm({
    gridProps: { cols: '1 s:1 m:2 l:3 xl:4 2xl:4' },
    labelWidth: 80,
    schemas,
  });

  function addTable() {
    showModal.value = true;
  }

  const loadDataTable = async (v) => {
    return await getProjectList({
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
    formBtnLoading.value = true;
    formRef.value.validate((errors) => {
      if (!errors) {
        createProject(formParams);
        window['$message'].success('新建成功');
        setTimeout(() => {
          showModal.value = false;
          reloadTable();
        });
      } else {
        window['$message'].error('请填写完整信息');
      }
      formBtnLoading.value = false;
    });
  }

  function handleEdit(record: Recordable) {
    console.log('点击了编辑', record);
    router.push({ name: 'basic-info', params: { id: record.id } });
  }

  function handleDelete(record: Recordable) {
    console.log('点击了删除', record);
    window['$message'].info('点击了删除');
  }

  function handleSubmit() {
    reloadTable();
  }
</script>

<style lang="less" scoped></style>
