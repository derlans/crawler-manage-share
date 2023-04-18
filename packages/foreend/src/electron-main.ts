import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './samples/node-api'
import router from './router'
import {
  NInput,
  NInputNumber,
  create,
  NButton,
  NForm,
  NFormItem,
} from 'naive-ui'
const app = createApp(App)
app.use(router)
app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
const naive = create({
  components: [NButton, NInputNumber, NInput, NForm, NFormItem],
})
app.use(naive)
console.log('electron-main.ts: app.mount("#app")')
