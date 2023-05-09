<template>
  <div class="register">
    <n-card class="register-card">
      <n-form class="register-form" :model="form" :rules="rules">
        <n-form-item label="用户名" prop="username">
          <n-input v-model="form.username" placeholder="请输入用户名"></n-input>
        </n-form-item>
        <n-form-item label="密码" prop="password">
          <n-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
          ></n-input>
        </n-form-item>
        <n-form-item>
          <n-button type="primary" @click="submitForm">注册</n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const form = ref({
      username: '',
      password: '',
    })

    const rules = {
      username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    }

    function submitForm() {
      console.log('提交表单：', form.value)
    }

    return {
      form,
      rules,
      submitForm,
    }
  },
})
</script>

<style>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-card {
  width: 400px;
}

.register-form {
  width: 80%;
  margin: 0 auto;
}
</style>
