<template>
  <div ref="chartRef" :style="{ height: '550px', width: '100%' }"></div>
</template>
<script setup lang="ts">
  import { onMounted, ref, Ref, computed, watch } from 'vue';
  import { useECharts } from '@/hooks/web/useECharts';

  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
  const props = defineProps<{
    value: any[];
  }>();
  const countByDayLastMonth = computed(() => {
    return [...props.value].sort((a, b) => {
      return a._id > b._id ? 1 : -1;
    });
  });
  // 初始化图表
  const initChart = () => {
    setOptions({
      // 图表标题
      title: {
        text: '任务和结果总数趋势图',
      },
      // 图表工具箱
      toolbox: {
        feature: {
          saveAsImage: {}, // 可以添加保存为图片的功能
        },
      },
      // 图例
      legend: {
        data: ['任务总数', '结果总数'],
      },
      // 横轴
      xAxis: {
        type: 'category',
        data: countByDayLastMonth.value.map((v) => v._id),
      },
      // 左纵轴（任务总数）
      yAxis: [
        {
          name: '任务总数',
          type: 'value',
        },
        {
          name: '结果总数',
          type: 'value',
        },
      ],
      // 数据系列
      series: [
        {
          name: '任务总数',
          type: 'line',
          yAxisIndex: 0, // 指定使用左纵轴
          data: countByDayLastMonth.value.map((v) => v.count),
        },
        {
          name: '结果总数',
          type: 'line',
          yAxisIndex: 1, // 指定使用右纵轴
          data: countByDayLastMonth.value.map((v) => v.resultCount),
        },
      ],
    });
  };
  onMounted(() => {
    if (countByDayLastMonth.value.length > 0) {
      initChart();
    }
  });
  watch(countByDayLastMonth, () => {
    if (countByDayLastMonth.value.length > 0) {
      initChart();
    }
  });
</script>
