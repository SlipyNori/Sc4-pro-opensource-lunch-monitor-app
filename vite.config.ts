import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base so the built site works from any path (e.g. GitHub Pages project sites)
  base: './',
  build: { chunkSizeWarningLimit: 1000 },
});
