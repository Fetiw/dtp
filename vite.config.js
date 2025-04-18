import { defineConfig } from 'vite'
import vituum from 'vituum'
import posthtml from '@vituum/vite-plugin-posthtml'
import path from 'path'

export default defineConfig({
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          '+.css': [],
          '+.scss': 'src/styles'
        }
      }
    }),
    posthtml({
      root: './src',
    }),
  ],
  resolve: {
    alias: {
      '@global': path.resolve(__dirname, 'src/styles/abstracts/main'),
    },
  },
})
