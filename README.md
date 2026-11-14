# PACHI DATA
## ローカル確認
`npm install && npm run build`（`npm run dev` でプレビュー）
## GitHub
`git init && git add . && git commit -m init && git branch -M main && git remote add origin <URL> && git push -u origin main`
## Cloudflare Pages
Workers & Pages → Pages → Git接続 → Build command `npm run build` / Output `dist`。公開URLを `astro.config.mjs` の `site` に設定。
## Search Console / GA4
Search Consoleで「URLプレフィックス」登録→HTMLタグ確認→`sitemap-index.xml`を送信。GA4は測定ID(G-…)を `src/config.ts` の `ga4` に設定。
## 記事追加
`src/content/articles/slug.md` を作成（frontmatter: title, description, category, pubDate, 任意でseoTitle/updateDate/related/noindex/canonical/image）→push。
## 広告
`src/config.ts` の `ADS` にタグを貼ると top/middle/bottom に表示。
