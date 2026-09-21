/* ============================================================
   Linsa Salon de Beauté — Kontni pataje (pwomosyon + rekritman)
   Itilize ni pa index.html (ekran koneksyon anplwaye) ni pa
   randevou.html (paj piblik kliyan).
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
    title:'Rabè 15% sou tout Lace',
    text:'Aplikasyon, kontou ak koafi lace — pwofite rabè a jiska fen mwa a.'
  },
  {
    type:'gradient',
    gradient:'linear-gradient(135deg,#3A2E24 0%,#161210 100%)',
    eyebrow:'Nouvo Sèvis',
    title:'Pose Ongles Design',
    text:'Kolòri, efè chrome ak perles French — soti 2 000 Gdes.'
  },
  {
    type:'gradient',
    gradient:'linear-gradient(135deg,#9A0F63 0%,#241E19 100%)',
    eyebrow:'Randevou',
    title:'Pran Randevou w Alavans',
    text:'Rele nou nan 38896200 / 34616287 pou reyève plas ou.'
  }
  // Egzanp pou ajoute yon slide ak yon vrè foto oswa videyo:
  // { type:'image', src:'promo/salon.jpg', eyebrow:'Nou Fyè', title:'Ekip Linsa Salon', text:'' },
  // { type:'video', src:'promo/demo.mp4', eyebrow:'Videyo', title:'Dekouvri Salon nou an', text:'' },
];

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
