/* ============================================================
   [NON BIZNIS OU] — Katalòg sèvis pataje
   Itilize ni pa staff/index.html (app kès la) ni pa public/index.html
   (paj randevou piblik la)

   KIJAN POU KONFIGIRE:
   1. Chanje CATEGORIES anba a pou match ak kategori biznis ou (F1-F9
      se rakousi klavye pou app kès la — kite l vid ('') si w pa vle
      okenn rakousi pou yon kategori)
   2. Chanje SERVICES pou lis sèvis ou ak pri reyèl yo an HTG
   3. price ka: yon nimewo fiks (500), yon fouchèt {min:X,max:Y},
      oswa null si pri a varye selon ka a (ajoute yon 'note' opsyonèl)
============================================================ */
const CATEGORIES = [
  { id:'cat1', label:'[Non Kategori 1]', key:'F1' },
  { id:'cat2', label:'[Non Kategori 2]', key:'F2' },
  { id:'cat3', label:'[Non Kategori 3]', key:'F3' }
];

const SERVICES = [
  { id:1, cat:'cat1', name:'[Non Sèvis 1]', price:500 },
  { id:2, cat:'cat1', name:'[Non Sèvis 2]', price:1000 },
  { id:3, cat:'cat2', name:'[Non Sèvis 3]', price:{min:1500,max:3000} },
  { id:4, cat:'cat2', name:'[Non Sèvis 4]', price:null, note:'Pri selon demand' },
  { id:5, cat:'cat3', name:'[Non Sèvis 5]', price:750 }
];

function servicePriceLabel(s){
  if(typeof s.price === 'number') return { text: formatHTG(s.price), variable:false };
  if(s.price && typeof s.price === 'object') return { text: formatHTG(s.price.min) + ' – ' + formatHTG(s.price.max), variable:true };
  return { text: s.note || 'Prix à définir', variable:true };
}

function formatHTG(n){
  return Math.round(n).toLocaleString('fr-FR') + ' HTG';
}
