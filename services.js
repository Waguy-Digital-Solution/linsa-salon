/* ============================================================
   Linsa Salon de Beauté — Katalòg sèvis pataje
   Itilize ni pa app kès la (index.html) ni pa paj randevou piblik la (randevou.html)
============================================================ */
const CATEGORIES = [
  { id:'manucure', label:'Manucure & Pédicure', key:'F1' },
  { id:'ongles',   label:'Pose Ongles',         key:'F2' },
  { id:'acrylic',  label:'Acrylic',             key:'F3' },
  { id:'lace',     label:'Lace',                key:'F4' },
  { id:'tara',     label:'Tara & Greff',        key:'F5' },
  { id:'cheveux',  label:'Cheveux',             key:'F6' },
  { id:'coiffure', label:'Coiffure',            key:'F7' },
  { id:'visage',   label:'Beauté du Visage',    key:'F8' },
  { id:'barber',   label:'Barber',              key:'F9' }
];

/* price: number (fixed) | {min,max} (range) | null (à définir au moment de la vente) */
const SERVICES = [
  { id:1,  cat:'manucure', name:'Manucure',                                   price:500 },
  { id:2,  cat:'manucure', name:'Pédicure',                                   price:500 },

  { id:3,  cat:'ongles', name:'Pose ongles simple gel',                       price:1500 },
  { id:4,  cat:'ongles', name:'Pose ongles ordinaire',                        price:1250 },
  { id:5,  cat:'ongles', name:'Pose ongles French',                          price:1750 },
  { id:6,  cat:'ongles', name:'Pose ongles design',                          price:2000 },
  { id:7,  cat:'ongles', name:'Pose ongles design premium',                  price:3000 },
  { id:8,  cat:'ongles', name:'Pose ongles effet chrome + perles French',    price:3500 },
  { id:9,  cat:'ongles', name:'Pose ongles design effet broche',             price:3500 },

  { id:10, cat:'acrylic', name:'Acrylic court',                              price:3000 },
  { id:11, cat:'acrylic', name:'Acrylic moyen',                              price:3500 },
  { id:12, cat:'acrylic', name:'Acrylic long',                               price:4000 },
  { id:13, cat:'acrylic', name:'Acrylic extra-long',                         price:5000 },
  { id:14, cat:'acrylic', name:'Acrylic pieds',                              price:2000 },
  { id:15, cat:'acrylic', name:'Acrylic pieds design',                       price:2250 },

  { id:16, cat:'lace', name:'Application lace',                              price:3000 },
  { id:17, cat:'lace', name:'Lace contour',                                  price:3500 },
  { id:18, cat:'lace', name:'Lace coiffure',                                 price:{min:4000,max:5000} },
  { id:19, cat:'lace', name:'Services lace (jusqu’à 7 500 Gdes)',       price:null, note:'Jusqu’à 7 500 Gdes' },

  { id:20, cat:'tara', name:'Tara',                                          price:{min:3000,max:6000} },
  { id:21, cat:'tara', name:'Greff',                                         price:{min:3000,max:6000} },

  { id:22, cat:'cheveux', name:'Application permanente',                     price:2500 },
  { id:23, cat:'cheveux', name:'Lavage cheveux',                             price:2000 },
  { id:24, cat:'cheveux', name:'Lavage + Blow',                              price:4000 },
  { id:25, cat:'cheveux', name:'Blow',                                       price:2500 },
  { id:26, cat:'cheveux', name:'Lissage cheveux longs',                      price:5000 },
  { id:27, cat:'cheveux', name:'Lissage cheveux courts',                     price:4000 },

  { id:28, cat:'coiffure', name:'Coiffure',                                  price:{min:2500,max:5000} },
  { id:29, cat:'coiffure', name:'Tresses africaines',                        price:null, note:'Prix selon le modèle' },

  { id:30, cat:'visage', name:'Faux cils',                                   price:null },
  { id:31, cat:'visage', name:'Teinture sourcils',                           price:null },

  { id:32, cat:'barber', name:'Coupe simple',                                price:null },
  { id:33, cat:'barber', name:'Coupe compliquée',                            price:null },
  { id:34, cat:'barber', name:'Coupe enfant',                                price:null }
];

function servicePriceLabel(s){
  if(typeof s.price === 'number') return { text: formatHTG(s.price), variable:false };
  if(s.price && typeof s.price === 'object') return { text: formatHTG(s.price.min) + ' – ' + formatHTG(s.price.max), variable:true };
  return { text: s.note || 'Prix à définir', variable:true };
}

function formatHTG(n){
  return Math.round(n).toLocaleString('fr-FR') + ' HTG';
}
