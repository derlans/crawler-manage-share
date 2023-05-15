<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref, Ref } from 'vue';

  import { useECharts } from '@/hooks/web/useECharts';

  import { basicProps } from './props';

  export default defineComponent({
    props: basicProps,
    setup() {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

      onMounted(() => {
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
            data: ['2023-01-01', '2023-01-02', '2023-01-03'], // 根据实际日期填充数据
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
              data: [10, 20, 15], // 根据实际任务总数填充数据
            },
            {
              name: '结果总数',
              type: 'line',
              yAxisIndex: 1, // 指定使用右纵轴
              data: [500, 1500, 800], // 根据实际结果总数填充数据
            },
          ],
        });
      });
      return {
        chartRef,
      };
    },
  });
</script>
