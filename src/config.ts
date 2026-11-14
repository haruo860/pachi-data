export const SITE = { name:'PACHI DATA', tagline:'パチンコの情報を、もっと分かりやすく。', desc:'パチンコの新台情報・確率・ボーダー・収支管理を分かりやすく解説する情報メディア。', ga4:'' /* 例: G-XXXXXXX */ };
// 広告枠: 空欄のままなら何も表示されません。審査通過後にHTMLを貼ってください。
export const ADS = { top:'', middle:'', bottom:'', sidebar:'' };
export const CATS = [
 {slug:'shindai',name:'新台情報'},{slug:'kouryaku',name:'機種攻略'},{slug:'data',name:'機種データ'},{slug:'beginner',name:'初心者講座'},
 {slug:'border',name:'確率・期待値・ボーダー'},{slug:'shop',name:'パチンコ店情報'},{slug:'news',name:'業界ニュース'},{slug:'money',name:'収支管理・お金'}];
export const catName=(s:string)=>CATS.find(c=>c.slug===s)?.name??s;
