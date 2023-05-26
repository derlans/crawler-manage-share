<template>
  <n-card :bordered="false" class="proCard">
    <BasicTable
      :columns="columns"
      :request="loadDataTable"
      :row-key="(row) => row.id"
      ref="actionRef"
      :actionColumn="actionColumn"
      @update:checked-row-keys="onCheckedRow"
      :scroll-x="1090"
    >
      <template #toolbar>
        <n-button type="primary" @click="reloadTable">刷新数据</n-button>
      </template>
    </BasicTable>

    <n-modal
      v-model:show="showModal"
      :show-icon="false"
      preset="dialog"
      :title="activeCrawlerNode.name + '监控'"
      style="width: 60vw; margin: 20px auto"
    >
      <iframe
        v-if="showModal"
        :src="activeCrawlerNode.monitorUrl"
        style="width: 55vw; height: 120vh; margin: 0 auto"
      ></iframe>
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
  import { getCrawlerNodeList } from '@/api/crawlerNode';
  import { CrawlerNode } from '@crawler-manage-share/utils';
  const actionRef = ref();

  const showModal = ref(false);
  const formBtnLoading = ref(false);
  const activeCrawlerNode = ref<CrawlerNode>({} as any);
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
            label: '查看监控',
            onClick: () => {
              if (!record.monitorUrl) {
                window['$message'].error('该节点未配置监控地址');
                return;
              }
              activeCrawlerNode.value = record;
              showModal.value = true;
            },
          },
        ],
      });
    },
  });

  const loadDataTable = async () => {
    return await getCrawlerNodeList();
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
  }
</script>

<style lang="less" scoped></style>
