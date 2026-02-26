/*
This is the configuation for vite, it imports react and its configs.
It sets the server port to 5173, default for vite and proxies any api calls
to port 3001. Dev server on 5173, data server on 3001.
*/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
});