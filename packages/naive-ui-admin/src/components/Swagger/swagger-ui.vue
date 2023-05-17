<template>
  <div ref="dom"> </div>
</template>

<script lang="ts" setup>
  import SwaggerUI from 'swagger-ui';
  import 'swagger-ui/dist/swagger-ui.css';
  import { onMounted, ref, watch } from 'vue';
  const props = defineProps<{
    value: string;
  }>();
  const dom = ref();
  const init = () => {
    if (!props.value || !dom.value) return;
    SwaggerUI({
      spec: JSON.parse(props.value),
      domNode: dom.value,
    });
  };
  onMounted(() => {
    init();
  });
  watch(
    () => props.value,
    () => {
      init();
    }
  );
</script>

<style lang="less" scoped></style>
