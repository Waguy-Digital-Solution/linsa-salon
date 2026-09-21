/* ============================================================
   Linsa Salon de Beauté — Katalòg sèvis pataje
   Itilize ni pa app kès la (index.html) ni pa paj randevou piblik la (randevou.html)
   Mizajou ak lis konplè meni ofisyèl la (pri an Goud/HTG).
============================================================ */
const CATEGORIES = [
  { id:'manucure', label:'Manucure & Pédicure',        key:'F1' },
  { id:'ongles',   label:'Pose Ongles',                 key:'F2' },
  { id:'acrylic',  label:'Ongles — Acrylique & Poly Gel', key:'F3' },
  { id:'vernis',   label:'Vernis',                      key:'F4' },
  { id:'tissage',  label:'Tissage & Coiffures',         key:'F5' },
  { id:'greff',    label:'Greff',                       key:'F6' },
  { id:'cheveux',  label:'Cheveux',                     key:'F7' },
  { id:'visage',   label:'Sourcils & Beauté',           key:'F8' },
  { id:'barber',   label:'Barber Shop',                 key:'F9' },
  { id:'maquillage', label:'Maquillage & Cils',         key:'' }
];

/* price: number (fixed) | {min,max} (range) | null (à définir au moment de la vente) */
const SERVICES = [
  /* ===== MANUCURE & PÉDICURE ===== */
  { id:1,  cat:'manucure', name:'Manicure',                              price:500 },
  { id:2,  cat:'manucure', name:'Pédicure',                              price:500 },
  { id:3,  cat:'manucure', name:'Pédicure pose',                         price:1500 },
  { id:4,  cat:'manucure', name:'Pédicure French',                       price:1750 },
  { id:5,  cat:'manucure', name:'Pédicure Design',                       price:2000 },

  /* ===== POSE ONGLES ===== */
  { id:6,  cat:'ongles', name:'Pose ongles simple gel',                  price:1500 },
  { id:7,  cat:'ongles', name:'Pose ongles ordinaire',                   price:1250 },
  { id:8,  cat:'ongles', name:'Pose ongles French',                      price:1750 },
  { id:9,  cat:'ongles', name:'Pose ongles Design',                      price:2000 },
  { id:10, cat:'ongles', name:'Pose ongles Design Premium',              price:3000 },
  { id:11, cat:'ongles', name:'Pose ongles effet chrome + perles French', price:3500 },
  { id:12, cat:'ongles', name:'Pose ongles Design effet broche',         price:3500 },

  /* ===== ONGLES — ACRYLIQUE & POLY GEL ===== */
  { id:13, cat:'acrylic', name:'Acrylic court',                          price:3000 },
  { id:14, cat:'acrylic', name:'Acrylic moyen',                          price:3500 },
  { id:15, cat:'acrylic', name:'Acrylic long',                           price:4000 },
  { id:16, cat:'acrylic', name:'Acrylic extra-long',                     price:{min:5000,max:6000} },
  { id:17, cat:'acrylic', name:'Poly Gel',                               price:{min:3500,max:6500} },

  /* ===== VERNIS ===== */
  { id:18, cat:'vernis', name:'Pose vernis gel',                         price:500 },
  { id:19, cat:'vernis', name:'Pose vernis ordinaire',                   price:300 },

  /* ===== TISSAGE & COIFFURES ===== */
  { id:20, cat:'tissage', name:'Tissage cheveux inclus',                 price:10000 },
  { id:21, cat:'tissage', name:'Tissage sans cheveux',                   price:3000 },
  { id:22, cat:'tissage', name:'Autre tissage',                         price:4000 },
  { id:23, cat:'tissage', name:'Spécial Tara, cheveux inclus',           price:5000 },
  { id:24, cat:'tissage', name:'Soft Locks, cheveux inclus',             price:12500 },
  { id:25, cat:'tissage', name:'Application Lace',                       price:3000 },
  { id:26, cat:'tissage', name:'Lace contour',                          price:3500 },
  { id:27, cat:'tissage', name:'Lace coiffure',                         price:{min:4000,max:5000} },

  /* ===== GREFF ===== */
  { id:28, cat:'greff', name:'Greff, cheveux inclus',                    price:10000 },
  { id:29, cat:'greff', name:'Greff droite',                            price:3000 },
  { id:30, cat:'greff', name:'Greff closure',                           price:3500 },
  { id:31, cat:'greff', name:'Greff bouclé',                            price:3000 },
  { id:32, cat:'greff', name:'Lavage Greff',                            price:1500 },

  /* ===== CHEVEUX ===== */
  { id:33, cat:'cheveux', name:'Lavage cheveux naturels',                price:2500 },
  { id:34, cat:'cheveux', name:'Coiffure bigoudis',                     price:3000 },
  { id:35, cat:'cheveux', name:'Application texturizer',                price:2000 },
  { id:36, cat:'cheveux', name:'Bain d’huile',                          price:4000 },
  { id:37, cat:'cheveux', name:'Bain de crème',                         price:4000 },
  { id:38, cat:'cheveux', name:'Coupe',                                 price:600 },
  { id:39, cat:'cheveux', name:'Coupe simple',                          price:500 },
  { id:40, cat:'cheveux', name:'Coupe enfant',                          price:500 },
  { id:41, cat:'cheveux', name:'Coupe simple enfant',                   price:400 },
  { id:42, cat:'cheveux', name:'Coupe femme simple',                    price:1000 },
  { id:43, cat:'cheveux', name:'Coupe femme',                           price:1250 },
  { id:44, cat:'cheveux', name:'Coupe femme Design',                    price:1500 },
  { id:45, cat:'cheveux', name:'Fresh-up femme',                        price:750 },
  { id:46, cat:'cheveux', name:'Fresh-up',                              price:400 },
  { id:47, cat:'cheveux', name:'Jerry Curl, cheveux inclus',            price:5000 },
  { id:48, cat:'cheveux', name:'Application permanente + Blow',         price:2500 },
  { id:49, cat:'cheveux', name:'Application permanente simple',         price:1500 },
  { id:50, cat:'cheveux', name:'Lavage cheveux permanente',             price:1500 },
  { id:51, cat:'cheveux', name:'Lavage cheveux naturels',               price:2000 },
  { id:52, cat:'cheveux', name:'Blow',                                  price:2000 },

  /* ===== SOURCILS & BEAUTÉ ===== */
  { id:53, cat:'visage', name:'Teinture sourcils',                       price:1000 },
  { id:54, cat:'visage', name:'Faux cils',                              price:1000 },

  /* ===== BARBER SHOP ===== */
  { id:55, cat:'barber', name:'Coupe simple',                            price:120 },
  { id:56, cat:'barber', name:'Coupe compliquée',                        price:150 },
  { id:57, cat:'barber', name:'Coupe enfant',                            price:100 },
  { id:58, cat:'barber', name:'Tresse',                                 price:250 },
  { id:59, cat:'barber', name:'Tresse barbe',                           price:300 },

  /* ===== MAQUILLAGE & CILS ===== */
  { id:60, cat:'maquillage', name:'Makeup simple',                       price:3000 },
  { id:61, cat:'maquillage', name:'Makeup compliqué',                    price:4000 },
  { id:62, cat:'maquillage', name:'Extension cils',                      price:1500 }
];

function servicePriceLabel(s){
  if(typeof s.price === 'number') return { text: formatHTG(s.price), variable:false };
  if(s.price && typeof s.price === 'object') return { text: formatHTG(s.price.min) + ' – ' + formatHTG(s.price.max), variable:true };
  return { text: s.note || 'Prix à définir', variable:true };
}

function formatHTG(n){
  return Math.round(n).toLocaleString('fr-FR') + ' HTG';
}
