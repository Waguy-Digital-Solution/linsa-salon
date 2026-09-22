/* ============================================================
   Linsa Salon de Beauté — Kontni pataje (pwomosyon + rekritman)
   Itilize ni pa index.html (ekran koneksyon anplwaye) ni pa
   randevou.html (paj piblik kliyan).
   Modifye tabo sa yo pou chanje sa ki parèt — pa bezwen touche
   kòd HTML/JS lòt kote.
============================================================ */

/* HÈ AK JOU OUVÈTI SALON AN — itilize pou anpeche kliyan pran randevou
   deyò lè travay yo. 24h fòma ("HH:MM"). Mete null pou yon jou fèmen.
   Salon an ouvè tout 7 jou nan semèn nan; lè ka pwolonje pi ta selon
   sikonstans (evènman, randevou espesyal, elatriye) — chanje isit la
   si sa rive vin regilye. */
const BUSINESS_HOURS = {
  0: { open:'09:00', close:'18:00' }, // Dimanch
  1: { open:'09:00', close:'18:00' }, // Lendi
  2: { open:'09:00', close:'18:00' }, // Madi
  3: { open:'09:00', close:'18:00' }, // Mèkredi
  4: { open:'09:00', close:'18:00' }, // Jedi
  5: { open:'09:00', close:'18:00' }, // Vandredi
  6: { open:'09:00', close:'18:00' }  // Samdi
};

/* Dire estanda (an minit) yo itilize pou tcheke doub-rezèvasyon —
   yon fwa yo gen orè pi presi pou chak sèvis, ranplase valè sa a. */
const DEFAULT_SERVICE_DURATION_MIN = 45;

/* ESPAS PIB — pwomosyon/anons.
   Chak slide ka: 'gradient' (koulè, pa gen bezwen imaj),
   'image' (yon foto — bay 'src'), oswa 'video' (yon klip — bay 'src').
   'expiresAt': dat 'YYYY-MM-DD' opsyonèl — slide a disparèt otomatikman
   apre dat sa a (pa gen bezwen retire l manyèlman).
   'link': URL opsyonèl — si prezan, yon bouton parèt sou slide a pou
   moun ka klike pou ale gade l (egzanp: yon videyo TikTok). */
const PROMO_SLIDES = [
  {
    type:'image',
    src:'assets/promo/slide-01-rabe-lace.webp',
    focus:'85% center',
    eyebrow:'Pwomosyon Mwa a',
    title:'Rabè 15% sou tout Lace',
    text:'Aplikasyon, kontou ak koafi lace — valab jiska 30 septanm 2026.',
    expiresAt:'2026-09-30'
  },
  {
    type:'image',
    src:'assets/promo/slide-02-pose-ongles-design.webp',
    focus:'88% center',
    eyebrow:'Nouvo Sèvis',
    title:'Pose Ongles Design',
    text:'Kolòri, efè chrome ak perles French — soti 2 000 Gdes.'
  },
  {
    type:'image',
    src:'assets/promo/slide-03-pran-randevou.webp',
    focus:'80% center',
    eyebrow:'Randevou',
    title:'Pran Randevou w Alavans',
    text:'Rele nou nan 38896200 / 34616287 pou rezève plas ou.'
  },
  {
    type:'video',
    src:'assets/promo/tiktok-1.mp4'
  },
  {
    type:'video',
    src:'assets/promo/tiktok-2.mp4'
  }
  // Egzanp pou ajoute yon slide ak yon vrè foto oswa videyo:
  // { type:'image', src:'promo/salon.jpg', eyebrow:'Nou Fyè', title:'Ekip Linsa Salon', text:'' },
  // { type:'video', src:'promo/demo.mp4', eyebrow:'Videyo', title:'Dekouvri Salon nou an', text:'' },
];

/* Retire otomatikman nenpòt slide ki gen yon 'expiresAt' ki nan tan pase. */
function filterActivePromos(list){
  const today = new Date().toISOString().slice(0,10);
  return (list || []).filter(s => !s.expiresAt || s.expiresAt >= today);
}

/* REKRITMAN — lis pòs travay ki disponib kounye a.
   Kite tablo a vid ([]) lè pa gen okenn ofri — seksyon an ap kache
   otomatikman sou paj kliyan an. Dekomante/ajoute yon antre pou
   pibliye yon ofri travay. */
const JOB_OPENINGS = [
  // {
  //   id: 1,
  //   title: 'Kwafè / Kwafèz Eksperyanse',
  //   type: 'Tan Plen',
  //   desc: 'Nou ap chèche yon kwafè(z) ki gen eksperyans nan koafi, blow ak lissage pou joenn ekip nou an.',
  //   contact: 'Rele 38896200 oswa vin depoze CV ou nan salon an.'
  // },
];
