import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import { VitePluginSitemap } from 'vite-plugin-sitemap';
export default defineConfig(() => {
  return {
    plugins: [
    react(),
      tailwindcss(),
        VitePluginSitemap({
      hostname: 'https://bharatgreencarbon.com'
    }),
    ],
      resolve: {
  alias: {
    '@': path.resolve(__dirname, '.'),
  },
},
    },
  };
});
