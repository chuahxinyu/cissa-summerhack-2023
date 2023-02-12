import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://chuahxinyu.github.io/cissa-summerhack-2023",
  plugins: [react()],
});
