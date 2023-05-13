<template>
  <div :key="key" class="">
    <div class="w-[80vw] h-[50vh] text-left">
      <n-input
        v-model:value="value"
        :rows="15"
        type="textarea"
        placeholder="基本的 Textarea"
      />
      <n-input-number v-model:value="range.start" />
      <n-input-number v-model:value="range.end" />
    </div>
    <VueForm v-model="userParams" :schema="schema"></VueForm>
    <n-button @click="run">点击执行</n-button>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { Crawler, FnString, generateParams } from '@crawler-manage-share/utils'
import VueForm from '@lljj/vue3-form-naive'
const fn = `async function fun(env,params){
  const {axios}=env
  const {q,page}=params
  return axios
  .get('https://m.weibo.cn/api//container/getIndex', {
    params: {
      containerid: '100103type=1&q='+q,
      page_type: 'searchall',
      page: page,
    },
  })
  .then((res) => {
    console.log(res.data.data,page)
    return res.data.data
  })
}`

const schema = {
  type: 'object',
  required: [],
  properties: {
    q: {
      type: 'string',
    },
  },
}
const range = ref({ start: 0, end: 0 })
const value = ref(fn)
const envParams = {
  axios,
}
const userParams = ref({
  q: '张杰',
  page: 0,
})

const allUserParams = computed(() =>
  // generateParams(),
)
const run = () => {
  const crawler = new Crawler(value.value as FnString, { envParams })
  crawler.run({ concurrency: 20, allUserParams: allUserParams.value })
}

const key = ref(1)
</script>

<style lang="less" scoped></style>
