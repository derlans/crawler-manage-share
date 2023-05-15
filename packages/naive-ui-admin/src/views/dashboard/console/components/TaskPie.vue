<template>
  <div ref="chartRef" :style="{ height: '550px', width: '100%' }"></div>
</template>
<script setup lang="ts">
  import { onMounted, ref, Ref, watch } from 'vue';
  import { useECharts } from '@/hooks/web/useECharts';

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
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      // 数据系列
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
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
