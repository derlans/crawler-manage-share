import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // 打包配置
  build: {
    lib: {
      entry: './index.ts', // 设置入口文件
      name: '@crawler-manage-share/utils', // 起个名字，安装、引入用
      fileName: (format) => `index.${format}.js`, // 打包后的文件名
      formats: ['es', 'cjs', 'umd'], // 打包后的文件格式
    },
    sourcemap: true, // 输出.map文件
    rollupOptions: {
      // input: './index.ts', // 设置入口文件
    },
  },
})
