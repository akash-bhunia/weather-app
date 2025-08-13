import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // যদি React ব্যবহার করো, নাহলে এই লাইন বাদ দাও

export default defineConfig({
  plugins: [react()], // React না হলে [] রাখো
  server: {
    host: '0.0.0.0', // Render এ বাইরের অ্যাক্সেসের জন্য
    port: process.env.PORT || 5173
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173
  }
})
 

