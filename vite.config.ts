import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  base: '/test-241213/', //om urlen är https://github.com/jenmwa/pnpm-vite-typescript
  define: {
    'process.env': {},
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "./src/scss/_variables.scss";',
  //     },
  //   },
  // },
});
