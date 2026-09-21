/* ============================================================
   Linsa Salon de Beauté — Koneksyon Firebase (baz done pataje)
   ============================================================
   POUKISA: Sa a pèmèt randevou kliyan pran sou paj piblik la
   (randevou.html) parèt otomatikman nan app kès la (index.html),
   menm si se pa menm aparèy/navigatè.

   KIJAN POU KONFIGIRE L (gratis, ~5 minit):
   1. Ale sou https://console.firebase.google.com
   2. "Add project" → bay li yon non (egzanp: linsa-salon)
   3. Nan meni goch la: Build → Firestore Database → "Create database"
      → chwazi "Start in test mode" pou kòmanse (ou ka sekirize l pi
      devan ak Firestore Security Rules)
   4. Nan Project settings (zanno a) → "Your apps" → klike </> (Web)
      → anrejistre app la → Firebase ap ba w yon objè "firebaseConfig"
   5. Kopye valè yo, mete yo nan FIREBASE_CONFIG anba a, epi sove.
   6. Pouse (push) chanjman an — tou de index.html ak randevou.html
      ap otomatikman konekte ak menm baz done a.

   Toutotan ou pa ranpli valè yo, aplikasyon an ap kontinye fonksyone
   ak localStorage sèlman (chak aparèy separe), tankou anvan.
============================================================ */
const FIREBASE_CONFIG = {
  apiKey: "REMPLACE_MWEN",
  authDomain: "REMPLACE_MWEN.firebaseapp.com",
  projectId: "REMPLACE_MWEN",
  storageBucket: "REMPLACE_MWEN.appspot.com",
  messagingSenderId: "REMPLACE_MWEN",
  appId: "REMPLACE_MWEN"
};

let _linsaDb = null;
let _linsaFirebaseReady = false;

function linsaFirebaseConfigured(){
  return FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey !== "REMPLACE_MWEN";
}

function linsaInitFirebase(){
  if(_linsaDb) return _linsaDb;
  if(!linsaFirebaseConfigured()) return null;
  if(typeof firebase === 'undefined') return null;
  try{
    if(!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    _linsaDb = firebase.firestore();
    _linsaFirebaseReady = true;
    return _linsaDb;
  } catch(e){
    console.error('Firebase init erè:', e);
    return null;
  }
}

/* Koute (an tan reyèl) tout randevou k ap vini yo.
   callback(list) rele chak fwa gen chanjman. Si Firebase pa konfigire,
   callback(null) rele yon sèl fwa pou moun ki rele l la ka fè fallback. */
function linsaSubscribeAppointments(callback){
  const db = linsaInitFirebase();
  if(!db){ callback(null); return function(){}; }
  return db.collection('appointments')
    .orderBy('date').orderBy('time')
    .onSnapshot(function(snap){
      const list = [];
      snap.forEach(function(doc){ list.push(Object.assign({ id: doc.id }, doc.data())); });
      callback(list);
    }, function(err){
      console.error('Firebase lekti erè:', err);
      callback(null);
    });
}

async function linsaAddAppointment(appt){
  const db = linsaInitFirebase();
  if(!db) throw new Error('firebase-not-configured');
  await db.collection('appointments').add(Object.assign({}, appt, {
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }));
}

async function linsaDeleteAppointment(id){
  const db = linsaInitFirebase();
  if(!db) throw new Error('firebase-not-configured');
  await db.collection('appointments').doc(id).delete();
}
