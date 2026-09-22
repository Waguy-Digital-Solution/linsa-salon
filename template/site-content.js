/* ============================================================
   [NON BIZNIS OU] — Kontni pataje (pwomosyon + rekritman)
   Itilize ni pa staff/index.html (ekran koneksyon anplwaye) ni pa
   public/index.html (paj piblik kliyan).
   Modifye tabo sa yo pou chanje sa ki parèt — pa bezwen touche
   kòd HTML/JS lòt kote.
============================================================ */

/* ESPAS PIB — pwomosyon/anons.
   Chak slide ka: 'gradient' (koulè, pa gen bezwen imaj),
   'image' (yon foto — bay 'src'), oswa 'video' (yon klip — bay 'src'). */
const PROMO_SLIDES = [
  {
    type:'gradient',
    gradient:'linear-gradient(135deg,#E0189A 0%,#5E0A3E 100%)',
    eyebrow:'Pwomosyon Mwa a',
    title:'[Tit pwomosyon ou]',
    text:'[Ti deskripsyon pwomosyon an — egzanp: rabè, ofri espesyal, elatriye.]'
  },
  {
    type:'gradient',
    gradient:'linear-gradient(135deg,#3A2E24 0%,#161210 100%)',
    eyebrow:'Randevou',
    title:'Pran Randevou w Alavans',
    text:'Rele nou nan [NIMEWO TELEFÒN OU] pou reyève plas ou.'
  }
  // Egzanp pou ajoute yon slide ak yon vrè foto oswa videyo:
  // { type:'image', src:'promo/foto.jpg', eyebrow:'Nou Fyè', title:'Ekip Nou an', text:'' },
  // { type:'video', src:'promo/demo.mp4', eyebrow:'Videyo', title:'Dekouvri Biznis Nou an', text:'' },
];

/* REKRITMAN — lis pòs travay ki disponib kounye a.
   Kite tablo a vid ([]) lè pa gen okenn ofri — seksyon an ap kache
   otomatikman sou paj kliyan an. Dekomante/ajoute yon antre pou
   pibliye yon ofri travay. */
const JOB_OPENINGS = [
  // {
  //   id: 1,
  //   title: '[Tit pòs la]',
  //   type: 'Tan Plen',
  //   desc: '[Deskripsyon pòs la ak sa w chèche.]',
  //   contact: 'Rele [NIMEWO] oswa vin depoze CV ou.'
  // },
];
