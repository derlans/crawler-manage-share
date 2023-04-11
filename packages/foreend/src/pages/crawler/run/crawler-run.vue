<template>
  <div :key="key" class="">
    <div class="w-[80vw] h-[50vh] text-left">
      <n-input
        v-model:value="value"
        :rows="20"
        type="textarea"
        placeholder="基本的 Textarea"
      />
    </div>
    <n-input v-model:value="userParams.q">q</n-input>
    <n-input-number v-model:value="userParams.page">page</n-input-number>
    <n-button @click="run">点击执行</n-button>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
const fn = `function fccc({axios},{q,page}){
  axios
  .get('https://m.weibo.cn/api//container/getIndex', {
    params: {
      containerid: '100103type=1&q='+q,
      page_type: 'searchall',
      page: page,
    },
  })  
  .then((res) => {
    console.log(res.data.data.cards)
  })
}`
const value = ref(fn)
const envParams = {
  axios,
}
const userParams = ref({
  q: '张杰',
  page: 0,
})

const run = () => {
  for (let i = 1; i < 2; i++) {
    userParams.value.page = i
    const test = `return ${fn}`
    const aaa = Function(test)()
    aaa(envParams, userParams)
  }
}

const key = ref(1)
</script>

<style lang="less" scoped></style>
