export const GET=({site}:any)=>new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml',site).href}\n`);
