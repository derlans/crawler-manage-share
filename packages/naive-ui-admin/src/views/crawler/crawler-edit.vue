<template>
  <div class="w-[80vw]">
    <n-form>
      <n-form-item label="名称" path="name">
        <n-input placeholder="请输入名称" v-model:value="form.name" />
      </n-form-item>
      <n-form-item label="描述" path="formParams">
        <n-input placeholder="请输入描述" v-model:value="form.description" />
      </n-form-item>
      <n-form-item label="爬虫类型" path="language">
        <NTag type="warning">{{ form.language }}</NTag>
      </n-form-item>
      <n-form-item label="爬虫代码" path="code">
        <codemirror
          v-model="form.code"
          :key="form.language"
          placeholder="Code goes here..."
          :style="{ height: '500px', width: '100%' }"
          :autofocus="true"
          :indent-with-tab="true"
          :tab-size="2"
          :extensions="codeExtensions[form.language]"
        />
      </n-form-item>
      <n-form-item label="自定义用户参数（json schema）" path="fnString">
        <codemirror
          v-model="form.userParamsSchema"
          placeholder="Code goes here..."
          :style="{ height: '500px', width: '100%' }"
          :autofocus="true"
          :indent-with-tab="true"
          :tab-size="2"
          :extensions="jsonExtensions"
        />
      </n-form-item>
      <n-form-item label="预览表单">
        <div class="w-[100%] border-red-500 border-2 p-6"
          ><vue-form :schema="schema" v-model="exampleForm"
        /></div>
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
  import { toRef, watch, computed, ref } from 'vue';
  import { Codemirror } from 'vue-codemirror';
  import { javascript } from '@codemirror/lang-javascript';
  import { python } from '@codemirror/lang-python';
  import { json } from '@codemirror/lang-json';
  import { oneDark } from '@codemirror/theme-one-dark';
  import { NForm, NTag } from 'naive-ui';
  import VueForm from '@lljj/vue3-form-naive';

  const Props = defineProps<{
    value: {
      name: string;
      description: string;
      code: string;
      userParamsSchema: string;
      language: 'javascript' | 'python';
    };
  }>();
  const emit = defineEmits<{
    (e: 'update:value', value: (typeof Props)['value']): void;
  }>();
  const jsExtensions = [javascript(), oneDark];
  const pythonExtensions = [python(), oneDark];
  const jsonExtensions = [json(), oneDark];
  const codeExtensions = {
    javascript: jsExtensions,
    python: pythonExtensions,
  };
  const form = toRef(Props, 'value');
  watch(
    () => form.value,
    (value) => {
      emit('update:value', value);
    },
    { deep: true }
  );
  const schema = computed(() => {
    try {
      return JSON.parse(form.value.userParamsSchema);
    } catch (error) {
      return {};
    }
  });
  const exampleForm = ref({});
</script>

<style lang="less" scoped></style>
