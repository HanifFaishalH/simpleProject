import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Counter from './src/counter/Counter'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello_world: "hello-world.html",
        contact: "contact.html",
        task: "task.html",
        counter: "counter.html"
      }
    }
  }
})
