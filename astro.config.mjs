import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://payin.com',
  base: process.env.ASTRO_BASE || '/',
  output: 'static',
});
