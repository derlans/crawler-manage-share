import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
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
app.mount('#app')
const naive = create({
  components: [NButton, NInputNumber, NInput, NForm, NFormItem],
})
app.use(naive)
