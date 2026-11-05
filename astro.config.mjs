import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import node from '@astrojs/node';
import keystatic from '@keystatic/astro';  // ← add

export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],  // ← add keystatic()
  output: 'static',
  adapter: node({ mode: 'standalone' }),
});