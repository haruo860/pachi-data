import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// 独自ドメイン取得後は site を書き換えるだけ
export default defineConfig({ site: 'https://pachi-data.pages.dev', integrations: [sitemap()] });
