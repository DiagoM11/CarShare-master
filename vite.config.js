import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/group19-capstone-project': {
        target: 'http://localhost:8080', // Pointing to your Spring Boot backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/group19-capstone-project/, '/user'),
      },
    },
  },
});
