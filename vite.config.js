import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: process.env.PORT || 5173
  },
  preview: {
    host: true,
    port: process.env.PORT || 4173,
    allowedHosts: ['weather-app-akashbhunia.onrender.com']
  }
});
