import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Eğer bir subdirectory'de çalışacaksa (örn: example.com/myapp)
  // base: '/myapp/',
});