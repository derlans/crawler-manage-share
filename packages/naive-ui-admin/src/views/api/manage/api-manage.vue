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

    <n-modal
      v-model:show="showModal"
      :show-icon="false"
      preset="dialog"
      title="新建"
      style="width: 60vw"
    >
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
        <n-form-item label="描述" path="description">
          <n-input placeholder="请输入描述" v-model:value="formParams.description" />
        </n-form-item>
        <n-form-item label="文档" path="detail">
          <div style="width: 100%; border: 0 1px solid black">
            <QuillEditor
              content-type="html"
              v-model:content="formParams.detail"
              style="height: 350px; width: 100%"
            />
          </div>
        </n-form-item>
        <n-form-item label="swagger" path="swagger">
          <div style="width: 100%; border: 0 1px solid black; height: 100px">
            <n-upload
              :file-list="[]"
              :limit="1"
              :show-upload-list="true"
              :accept="['.json']"
              :default-upload="false"
              @change="handleUpload"
            >
              <n-button>上传文件</n-button>
            </n-upload>
          </div>
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
  import { type FormRules } from 'naive-ui';
  import { getApiList, createApi } from '@/api/api';
  import { QuillEditor } from '@vueup/vue-quill';
  import '@vueup/vue-quill/dist/vue-quill.snow.css';
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
      label: '名字',
      componentProps: {
        placeholder: '名字',
      },
      rules: [{ required: false, message: '请输入名字', trigger: ['blur'] }],
    },
    {
      field: 'description',
      component: 'NInput',
      label: '描述',
      componentProps: {
        placeholder: '描述',
      },
      rules: [{ required: false, message: '请输入描述', trigger: ['blur'] }],
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
  const actionRef = ref();

  const showModal = ref(false);
  const formBtnLoading = ref(false);
  const formParams = reactive({
    name: '',
    description: '',
    detail: '',
    swagger: '',
  });
  const handleUpload = (e) => {
    const file = e.fileList[0].file as File;
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      formParams.swagger = reader.result as string;
    };
  };
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
            onClick: () => router.push({ name: 'api-detail', params: { id: record._id } }),
          },
        ],
        select: (key) => {
          window['$message'].info(`您点击了，${key} 按钮`);
        },
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
    return await getApiList({
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
    console.log(formParams, 'formParams');
    formRef.value.validate((errors) => {
      if (!errors) {
        createApi(formParams);
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

  function handleSubmit() {
    reloadTable();
  }
</script>

<style lang="less" scoped></style>
