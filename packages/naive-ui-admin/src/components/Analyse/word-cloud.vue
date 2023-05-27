<template>
  <div ref="chartRef" :style="{ height: '550px', width: '100%' }"></div>
</template>

<script setup lang="ts">
  import { onMounted, ref, Ref, watch } from 'vue';
  import { useECharts } from '@/hooks/web/useECharts';
  import 'echarts-wordcloud';
  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
  const props = defineProps<{
    value: any[];
    name: string;
  }>();

  // 初始化图表
  const initChart = () => {
    setOptions({
      // 图表标题
      title: {
        text: props.name,
      },
      // 词云配置
      series: [
        {
          type: 'wordCloud',
          // shape: '',
          gridSize: 2,
          sizeRange: [12, 60],
          rotationRange: [-90, 90],
          textStyle: {},
          data: props.value,
        },
      ],
    });
  };

  onMounted(() => {
    if (props.value.length > 0) {
      initChart();
    }
  });

  watch(props, () => {
    if (props.value.length > 0) {
      initChart();
    }
  });
</script>
