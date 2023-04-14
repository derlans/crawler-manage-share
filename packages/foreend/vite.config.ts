import { defineConfig } from 'vite'
import { resolve } from 'path'
import pluginFn from './config/vite-plugins'
// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const { mode } = configEnv
  const isEletcron = mode === 'electron'
  return {
    plugins: pluginFn(configEnv),
    server: {
      host: '127.0.0.1',
      port: 3344,
    },
    build: {
      rollupOptions: {
        input: {
          index: isEletcron
            ? resolve(__dirname, 'electron-index.html')
            : resolve(__dirname, 'index.html'),
        },
      },
    },
    clearScreen: false,
    resolve: {
      alias: {
        '@': resolve(__dirname, './src/'),
      },
    },
  }
})
